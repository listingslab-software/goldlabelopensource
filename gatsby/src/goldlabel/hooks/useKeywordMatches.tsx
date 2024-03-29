
export const useKeywordMatches = (
    siblingOf: string,
    parentSlug: string,
    allMarkdown: any,
) => {
    const docs: Array<any> = []
    for(let i = 0; i < allMarkdown.length; i++){
        const {frontmatter} = allMarkdown[i]
        if (frontmatter.parentSlug === parentSlug){
            docs.push({
                order: frontmatter.order,
                ...frontmatter,
            })
        }
    }
    const sortedArr = [...docs].sort((a, b) => a.order - b.order);
    return sortedArr
}

