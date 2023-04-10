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
      titles: '[test] Treat Yourself',
      color: '#008000',
    },
    // =-------------------------------
    {
      heading: 'Computer Science',
      image:
        'https://external-preview.redd.it/1MuiO5_KW_8rfN3AEGdRxU-p1VEcaQi4bdLb5rBvtjg.png?format=pjpg&auto=webp&s=83247025c60f25bb81bb989c376c58bb9613cd4c',
      creator: 'Allain Daigle',
      titles: '[test] Treat Yourself',
      color: '#008000',
    },
    {
      heading: 'Agriculture & Natural Resources',
      image:
        'https://external-preview.redd.it/1MuiO5_KW_8rfN3AEGdRxU-p1VEcaQi4bdLb5rBvtjg.png?format=pjpg&auto=webp&s=83247025c60f25bb81bb989c376c58bb9613cd4c',
      creator: 'Allain Daigle',
      titles: '[test] Treat Yourself',
      color: '#008000',
    },
    {
      heading: 'Agriculture & Natural Resources',
      image:
        'https://external-preview.redd.it/1MuiO5_KW_8rfN3AEGdRxU-p1VEcaQi4bdLb5rBvtjg.png?format=pjpg&auto=webp&s=83247025c60f25bb81bb989c376c58bb9613cd4c',
      creator: 'Allain Daigle',
      titles: '[test] Treat Yourself',
      color: '#008000',
    },
    {
      heading: 'Agriculture & Natural Resources',
      image:
        'https://external-preview.redd.it/1MuiO5_KW_8rfN3AEGdRxU-p1VEcaQi4bdLb5rBvtjg.png?format=pjpg&auto=webp&s=83247025c60f25bb81bb989c376c58bb9613cd4c',
      creator: 'Allain Daigle',
      titles: '[test] Treat Yourself',
      color: '#008000',
    },
    {
      heading: 'Agriculture & Natural Resources',
      image:
        'https://external-preview.redd.it/1MuiO5_KW_8rfN3AEGdRxU-p1VEcaQi4bdLb5rBvtjg.png?format=pjpg&auto=webp&s=83247025c60f25bb81bb989c376c58bb9613cd4c',
      creator: 'Allain Daigle',
      titles: '[test] Treat Yourself',
      color: '#008000',
    },
    {
      heading: 'Agriculture & Natural Resources',
      image:
        'https://external-preview.redd.it/1MuiO5_KW_8rfN3AEGdRxU-p1VEcaQi4bdLb5rBvtjg.png?format=pjpg&auto=webp&s=83247025c60f25bb81bb989c376c58bb9613cd4c',
      creator: 'Allain Daigle',
      titles: '[test] Treat Yourself',
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
