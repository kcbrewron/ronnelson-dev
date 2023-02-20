import getConfig from 'next/config'

const token = process.env.GITHUB_API_TOKEN
//const githubToken = serverRuntimeConfig.githubToken;

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

const variables = {};

const fetchData = async () => {
  var myHeaders = new Headers();
  const token=process.env.GITHUB_API_TOKEN
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");
  console.log('requesting data from github');

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      query: query,
      variables: variables
    })
  });
  const data = await res.json();
  return data;

};




export default fetchData;
