const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log(flights.split('+'))

for (const flight of flights.split('+')) {
    const [status, boarding, destination, travelTime] = flight.split(';')

    // const flightStatus = status.split('_').slice(1).join(' ')
    const flightStatus = `${status.startsWith('_Delayed') ? '🔴' : ''}${status.replaceAll('_', ' ')}`

    const getCode = str => str.slice(0, 3).toUpperCase()

    const duration = travelTime.replace(':', 'h')

    const output = `${flightStatus} from ${getCode(boarding)} to ${getCode(destination)} (${duration})`.padStart(50)
    console.log(output)
}