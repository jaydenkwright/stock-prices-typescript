export interface Props{
    companyName: string,
    symbol: string
}

export interface Article{
    author: string,
    content: string,
    description: string,
    publishedAt: string,
    source: {
        id: any,
        name: string
    },
    title: string,
    url: string,
    urlToImage: string
}
