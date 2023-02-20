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
  landingPageCollection(limit:1,where: { slug_exists: true,category:"${landing}" }) {
    items{
      ${LANDING_PAGE_QUERY}`);
  return extractLandingPage(entries);
}

function extractLandingPage(fetchResponse){
  return fetchResponse?.data?.landingPageCollection?.items;
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
  ).then((response) => response.json());
}

function extractPost(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items;
}



export async function getPreviewPostBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  );
  return extractPost(entry);
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
