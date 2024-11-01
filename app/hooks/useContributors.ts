// TODO:need type fixing , need to be read from backend to avoid rate limits
interface githubContributor {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;    
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  }

async function getContributers(
    owner: string,
    repoName: string,
    page: number = 1
  ):Promise<githubContributor[]> {
    let req = await fetch(
      `https://api.github.com/repos/${owner}/${repoName}/contributors?per_page=100&page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    let contributersList:githubContributor[] = await req.json();
    return contributersList;
}

export interface  Contributor {
    name:string,
    roles:string[],
    githubUrl:string,
    avatar:string
}

const useContributors=async():Promise<Contributor[]> =>{
    const [frontendContribList, backendContribList] = await Promise.all([
    getContributers("persianccbook", "frontend"),
    getContributers("persianccbook", "backend")
  ]);

    const contributors = [...frontendContribList,...backendContribList].map((contributor) => {
        const roles = [];
        if (frontendContribList.includes(contributor)) roles.push('frontend');
        if (backendContribList.includes(contributor)) roles.push('backend');
        return {    
            name: contributor.login,
            roles: roles,
            githubUrl: contributor.html_url,
            avatar: contributor.avatar_url
        };
    });
    return contributors
}
export default useContributors