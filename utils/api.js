const HOME_GRAPHQL_QUERY=
      `query {
  homeCollection(limit:1) {
    items{
      title,
      heroImage {url,width,height,description,title},
      seoMetadata{seoTitle,seoKeywords, seoDescription, hideFromSearchEnginesNoindex,searchEngineNoFollow },
      published,
      recentArticlesCollection{
        items{
          __typename
          ... on Post{
            description,
            category,
            title,
            slug,
            hero {
              heroImage {url,width,height,description,title}
            }
          },
          __typename
          ... on LandingPage{
            title,
            category,
            description,
            heroImage {url,width,height,description,title},
            slug,
            category,
          }, 
        },
      },
        content{
        json
        links {
          entries {
            inline {
              sys {
                id
                spaceId
                environmentId
              }
            __typename
              ... on Home {
              title
              }
            }
            block {
              sys {
                id
              }
            }
          }
          assets{
            block {
                sys {
                  id
                }
                url
                title
                width
                height
                description
              }}
          }
      }
      
  }
}
}`


const POST_BY_SLUG=`{
    items{
      slug,
      seoMetadata{seoKeywords,seoTitle},
      category,
      title,
      date,
      description
      content{json,links {
            entries {
              inline {
                sys {
                  id
                  spaceId
                  environmentId

                }
                __typename
                ... on LandingPage {
                  title
                  slug
                }
              }
              block {
                sys {
                  id
                }
              }
            }
          assets{
            block {
                sys {
                  id
                }
                url
                title
                width
                height
                description
              }
            }
          }
          },
          hero {cta,caption, showCta, title
              heroImage {url,width,height,description,title}
            },
      },
    
    }
}`

const POST_GRAPHQL_FIELDS = `
      title
      description
      date,
      slug,
      content{ json }
      author{name,image{url,width,height,title}},
      hero {
        heroImage {
          url
        }
        cta,
        caption {
          json
        }
      }
`;

const LANDING_PAGE_QUERY = `
      title,
      category,
      heroImage{url,width,height,description,title},
      seoMetadata{seoTitle,seoKeywords, seoDescription, hideFromSearchEnginesNoindex,searchEngineNoFollow },
      slug,
      content {
          json
          links {
            entries {
              inline {
                sys {
                  id
                  spaceId
                  environmentId

                }
                __typename
                ... on LandingPage {
                  title
                  slug
                }
              }
              block {
                sys {
                  id
                }
                __typename
                ... on ImageCopySxS
                
                {
                title,
                copy,
                imageOnRight,
                image { title,url,height,width}
              }
            }
            }
          assets{
            block {
                sys {
                  id
                }
                url
                title
                width
                height
                description
              }}
          }
        
        }
      }
    }}`
/**
 * TODO move the inital part of the query here so we can use this for
 * all landing page queries.
 * 
 * @param { string } landing 
 * @param {*} preview 
 * 
 * @returns 
 */
export async function fetchLandingPage(landing, preview=false){
  const entries = await fetchGraphQL(
  `query {
  landingPageCollection(limit:1,where: { slug_exists: true,category:"${(landing)}" }) {
    items{
      ${LANDING_PAGE_QUERY}`).then((res )=> {
        //console.log('returning %s items in the landing page collection' +res.data.landingPageCollection.items[0])
        return res.data.landingPageCollection.items[0];
      }).catch((err)=>{
        console.error("An error was received when calling the landing page query "+err);
      });
    return entries;
}

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
        }`,
      },

      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
  .catch((err)=>{
    console.error("error message from contentful "+err);
  });
}

function extractPost(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items;
}



export async function getAllPostsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractPostEntries(entries);
}

/**
 * TODO move the inital part of the query here so we can use this for
 * all landing page queries.
 * 
 * @param { string } landing 
 * @param {*} preview 
 * 
 * @returns 
 */
export async function fetchHome(){
  const entries = await fetchGraphQL(HOME_GRAPHQL_QUERY).then((res )=> {
        return res.data.homeCollection.items[0];
      }).catch((err)=>{
        console.error("An error was received when calling the home page query "+err);
      });
    return entries;
};
/**
 * 
 * @param {String} slug represents the key for the article on contentful
 * @returns 
 */
export async function getArticleBySlug(slug){
  console.log(slug);
  const query = `query { postCollection(limit:1,where: {slug:"${(slug)}" }) ${POST_BY_SLUG}`
  const article = await fetchGraphQL(`query {
    postCollection(limit:1,where: {slug:"${slug}" }) ${POST_BY_SLUG}`).then((res)=>{
      return res.data.postCollection.items[0];
    }).catch((err)=>{
        console.error("An error was received when calling the query for slug: %s received error:%s "+slug, err);
    })
    
    return article;
};

export async function getAllPostsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      postCollection(order: date_DESC, preview: ${preview ? "true" : "false"}) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
  return extractPostEntries(entries);
}

export async function getPostAndMorePosts(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${
      preview ? "true" : "false"
    }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  );
}
