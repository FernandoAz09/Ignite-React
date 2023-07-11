export function Post() {
    return <p>Post</p>
}


/* DEFAULT EXPORTS vs NAMED EXPORTS

 
** DEFAULT EXPORTS (uso do export default )
** Na importação posso alterar o nome da função
** Se esquecer de trocar o conteudo do componente ele mostrará aquilo que tem.
** 
** 
** NAMED EXPORTS (uso do export function)
** Na importação entre {} só apresentará em tela se tiver o mesmo nome da função exportada
*/