export default async function handler(req, res) {
  const search = req.query.search || '';

  const badges = [
    {
      heading: 'Technology & Information',
      image:
        'https://external-preview.redd.it/1MuiO5_KW_8rfN3AEGdRxU-p1VEcaQi4bdLb5rBvtjg.png?format=pjpg&auto=webp&s=83247025c60f25bb81bb989c376c58bb9613cd4c',
      creator: 'Victoria Raish',
      titles: 'APA Style Citations: Introduction',
      color: '#3399FF',
    },
    {
      heading: 'Education',
      image:
        'https://external-preview.redd.it/1MuiO5_KW_8rfN3AEGdRxU-p1VEcaQi4bdLb5rBvtjg.png?format=pjpg&auto=webp&s=83247025c60f25bb81bb989c376c58bb9613cd4c',
      creator: 'Cassue Rosas-Carson',
      titles: 'IST Career Resources',
      color: '#f2dc23',
    },
    {
      heading: 'Professional Skills',
      image:
        'https://external-preview.redd.it/1MuiO5_KW_8rfN3AEGdRxU-p1VEcaQi4bdLb5rBvtjg.png?format=pjpg&auto=webp&s=83247025c60f25bb81bb989c376c58bb9613cd4c',
      creator: 'Rita Griffith',
      titles: 'IST Careers - Meet a Coach level 2',
      color: '#800080',
    },
    {
      heading: 'Agriculture & Natural Resources',
      image:
        'https://external-preview.redd.it/1MuiO5_KW_8rfN3AEGdRxU-p1VEcaQi4bdLb5rBvtjg.png?format=pjpg&auto=webp&s=83247025c60f25bb81bb989c376c58bb9613cd4c',
      creator: 'Allain Daigle',
      titles: 'Sand: How Not to Grow Crops',
      color: '#008000',
    },
    // =-------------------------------
    {
      heading: 'Computer Science',
      image:
        'https://external-preview.redd.it/1MuiO5_KW_8rfN3AEGdRxU-p1VEcaQi4bdLb5rBvtjg.png?format=pjpg&auto=webp&s=83247025c60f25bb81bb989c376c58bb9613cd4c',
      creator: 'Bob (the builder)',
      titles: 'Java: Introduction',
      color: '#008000',
    },
    {
      heading: 'Agriculture & Natural Resources',
      image:
        'https://external-preview.redd.it/1MuiO5_KW_8rfN3AEGdRxU-p1VEcaQi4bdLb5rBvtjg.png?format=pjpg&auto=webp&s=83247025c60f25bb81bb989c376c58bb9613cd4c',
      creator: 'Phill Collins',
      titles: 'Dirt and Minerals Science',
      color: '#008000',
    },
    {
      heading: 'Education',
      image:
        'https://external-preview.redd.it/1MuiO5_KW_8rfN3AEGdRxU-p1VEcaQi4bdLb5rBvtjg.png?format=pjpg&auto=webp&s=83247025c60f25bb81bb989c376c58bb9613cd4c',
      creator: 'Leslie Frauen',
      titles: 'Calculus: Introduction',
      color: '#008000',
    },
    {
      heading: 'Business',
      image:
        'https://external-preview.redd.it/1MuiO5_KW_8rfN3AEGdRxU-p1VEcaQi4bdLb5rBvtjg.png?format=pjpg&auto=webp&s=83247025c60f25bb81bb989c376c58bb9613cd4c',
      creator: 'Joe Burlhartt',
      titles: 'Mind Over Matter: Solving Poor Time Management',
      color: '#008000',
    },
    {
      heading: 'Computer Science',
      image:
        'https://external-preview.redd.it/1MuiO5_KW_8rfN3AEGdRxU-p1VEcaQi4bdLb5rBvtjg.png?format=pjpg&auto=webp&s=83247025c60f25bb81bb989c376c58bb9613cd4c',
      creator: 'Allain Daigle',
      titles: 'Finding The Secret to Python',
      color: '#008000',
    },
    {
      heading: 'Agriculture & Natural Resources',
      image:
        'https://external-preview.redd.it/1MuiO5_KW_8rfN3AEGdRxU-p1VEcaQi4bdLb5rBvtjg.png?format=pjpg&auto=webp&s=83247025c60f25bb81bb989c376c58bb9613cd4c',
      creator: 'Allain Daigle',
      titles: 'Treat Yourself: Life of Ice Cream',
      color: '#008000',
    },
  ];

  res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  res.json(
    badges
      .map(badge => ({
        ...badge,
        index:
          `${badge.creator} ${badge.heading} ${badge.titles}`.toLowerCase(),
      }))
      .filter(badge => badge.index.includes(search.toLowerCase()))
  );
}
