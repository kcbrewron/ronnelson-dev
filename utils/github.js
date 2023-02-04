const query= 
`query GetMyProfile {
  user(login: "kcbrewron") {
    avatarUrl
    bio
    bioHTML
    email
    url
    twitterUsername
    websiteUrl
    isSiteAdmin
    isGitHubStar
    isHireable
    isDeveloperProgramMember
    followers {
      totalCount
    }
  }
  repository(name: "ronnelson-dev", owner: "kcbrewron") {
    description
    descriptionHTML
    stargazerCount
  }
}`;

const headers = {
  'Authorization': 'Bearer <YOUR_PERSONAL_ACCESS_TOKEN>',
  'Content-Type': 'application/json'
};

const variables = {};

const fetchData = async () => {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      query: query,
      variables: variables
    })
  });
  const data = await res.json();
  console.log(data);
};

fetchData();
