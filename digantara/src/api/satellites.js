import axios from "axios";

const API_URL = "/api/satellites";

export const fetchSatellites = async (objectTypes = [], attributes = []) => {
  const types = objectTypes.length ? objectTypes.join(',') : '';
  const attrs = attributes.length ? attributes.join(',') : 'noradCatId,intlDes,name,launchDate,decayDate,objectType,launchSiteCode,countryCode,orbitCode';

  const url = `${API_URL}?objectTypes=${types}&attributes=${attrs}`;

  try {
    const response = await axios.get(url);

    if (response.data.statusCode && response.data.statusCode !== 200) {
      throw new Error(response.data.message || 'API returned an error');
    }

    return response.data.data;
  } catch (error) {
    console.error("API Error:", error.message);
    throw error;
  }
};