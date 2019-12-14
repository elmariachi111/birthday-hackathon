/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

function scrollToHash(hash) {
    const $el = document.getElementById(hash)
    if ($el) {
        $el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
        document.getElementById('theheader').scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
}


export const shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition
}) => {

    console.log("Huhu")
    scrollToHash(location.hash.slice(1))
    /*const currentPosition = getSavedScrollPosition(location)
    const queriedPosition = getSavedScrollPosition({ pathname: `/random` })

    window.scrollTo(...(currentPosition || [0, 0]))
    console.log(currentPosition)
*/
    //return false
}


export function onRouteUpdate({ location }) {
    if (location.hash) {
        scrollToHash(location.hash.slice(1))
        //window.setTimeout(scrollTo(hash.slice(1)), 1500)
    }


}
