import client from '../../contentful';

const fetchExhibits = async () => {
  const response = await client.getEntries({
    content_type: 'exhibits',
    'fields.category': 'Space', 
  });

  return response.items;
};

export { fetchExhibits };
