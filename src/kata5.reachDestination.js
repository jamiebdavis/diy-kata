const reachDestination = (distance, speed) => {
    let time = distance / speed;
    return "I should be there in " + Math.round(time * 50) / 50 + " hours."
}

module.exports = reachDestination;
