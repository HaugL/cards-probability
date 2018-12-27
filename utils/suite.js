export const getColorFromSuite = (suite) => {
    if(suite === '◆' || suite === '♥'){
        return 'red'
    } else {
        return 'black'
    }
}