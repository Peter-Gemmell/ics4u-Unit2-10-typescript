/*
 * This program is a vehicle class.
 *
 * @author  Mr Coxall
 * @version 1.0
 * @since   2020-01-01
 */

import Truck from './Truck'
import Bike from './Bike'

/**
 * Example of a section that would crash the program by attempting
 * to instantiate an abstract class.
 */
import Vehicle from './Vehicle'

// new Sedan
console.log('Created Sedan.')
const sedan = new Vehicle(160, 'Black')
console.log(`\nMax Speed: ${Number(sedan.getMaxSpeed())}\n`)

const bmx = new Bike('Red', 40, 2)

console.log('Created Bmx bike.\nStatus:\n')
bmx.status()

console.log('Set the cadence to 10\n')
bmx.accel(10)
bmx.status()

console.log('\nAccelerate by 15:')
bmx.accel(15)
bmx.status()

console.log('\nRing bell.')
bmx.ringBell()

const bigTruck = new Truck('HGC-3456F', 'Grey', 200, 4, 10)

console.log('Created a Truck.\nStatus:\n')
bigTruck.status()

console.log('\nAccelerating, 10 of power for ten seconds:')
bigTruck.accel(10, 10)
console.log('New speed: ' + String(bigTruck.getSpeed()))

console.log('\nBreaking, 10 of power for 10 sec.')
bigTruck.accel(10, 10)
console.log('New speed: ' + String(bigTruck.getSpeed()))

console.log('\nApplyed air pressure of 10 and Power of 10 for 10s :')
bigTruck.break(10, 10)
console.log('New speed: ' + String(bigTruck.getSpeed()))

console.log('\nDone.')
