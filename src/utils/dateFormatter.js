// utils/dateFormatter.js
export const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  
  try {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid Date';
  }
};

// Then in your component:
// import { formatDate } from '../utils/dateFormatter';

// Use it in your component:
// microscore={formatDate(date_added)}