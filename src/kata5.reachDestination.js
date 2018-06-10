const reachDestination = (distance, speed) => {
    const time = distance / speed
    const hours = Math.floor(time / 60)
    const minutes = time % 60

    return hours + ':' + minutes
}

module.exports = reachDestination;
