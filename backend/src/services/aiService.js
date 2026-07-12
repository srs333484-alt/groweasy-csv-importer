const CRM_FIELDS = [
  'created_at', 'name', 'email', 'country_code', 
  'mobile_without_country_code', 'company', 'city', 'state',
  'country', 'lead_owner', 'crm_status', 'crm_note',
  'data_source', 'possession_time', 'description'
];

const ALLOWED_STATUS = ['GOOD_LEAD_FOLLOW_UP', 'DID_NOT_CONNECT', 'BAD_LEAD', 'SALE_DONE'];
const ALLOWED_SOURCES = ['leads_on_demand', 'meridian_tower', 'eden_park', 'varah_swamy', 'sarjapur_plots'];

exports.extractCRMData = async (records) => {
  const results = records.map(record => {
    const crmRecord = {
      created_at: new Date().toISOString(),
      name: record.name || record.Name || record.full_name || record.FullName || '',
      email: record.email || record.Email || record.email_address || '',
      country_code: record.country_code || record.countryCode || record.CountryCode || '',
      mobile_without_country_code: record.mobile || record.Mobile || record.phone || record.Phone || record.mobile_number || '',
      company: record.company || record.Company || record.company_name || '',
      city: record.city || record.City || '',
      state: record.state || record.State || '',
      country: record.country || record.Country || '',
      lead_owner: record.lead_owner || record.LeadOwner || '',
      crm_status: mapStatus(record.crm_status || record.Status || record.lead_status || ''),
      crm_note: record.crm_note || record.Notes || record.note || record.remarks || '',
      data_source: mapSource(record.data_source || record.Source || record.source || ''),
      possession_time: record.possession_time || record.PossessionTime || '',
      description: record.description || record.Description || ''
    };
    return crmRecord;
  });

  return results;
};

function mapStatus(status) {
  if (!status) return 'GOOD_LEAD_FOLLOW_UP';
  const statusLower = status.toString().toLowerCase();
  if (statusLower.includes('good') || statusLower.includes('follow')) return 'GOOD_LEAD_FOLLOW_UP';
  if (statusLower.includes('did not') || statusLower.includes('not connect')) return 'DID_NOT_CONNECT';
  if (statusLower.includes('bad') || statusLower.includes('not interest')) return 'BAD_LEAD';
  if (statusLower.includes('sale') || statusLower.includes('done') || statusLower.includes('closed')) return 'SALE_DONE';
  return 'GOOD_LEAD_FOLLOW_UP';
}

function mapSource(source) {
  if (!source) return '';
  const sourceLower = source.toString().toLowerCase();
  if (sourceLower.includes('leads_on_demand') || sourceLower.includes('demand')) return 'leads_on_demand';
  if (sourceLower.includes('meridian')) return 'meridian_tower';
  if (sourceLower.includes('eden')) return 'eden_park';
  if (sourceLower.includes('varah')) return 'varah_swamy';
  if (sourceLower.includes('sarjapur')) return 'sarjapur_plots';
  return '';
}
