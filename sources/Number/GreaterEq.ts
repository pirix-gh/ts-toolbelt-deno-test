import {Equals} from '../Any/Equals.ts'
import {_Greater} from './Greater.ts'
import {IterationOf} from '../Iteration/IterationOf.ts'
import {Iteration} from '../Iteration/Iteration.ts'
import {Number} from './Number.ts'
import {Or} from '../Boolean/Or.ts'
import {NumberMap} from '../Misc/Iteration/Number.ts'
import {Map} from '../Misc/Iteration/Map.ts'

/**
@hidden
*/
export type _GreaterEq<N1 extends Iteration, N2 extends Iteration, IMap extends Map> =
    Or<Equals<N1, N2>, _Greater<N1, N2, IMap>>

/**
Check if a [[Number]] is greater or equal to another one
@param N1 to compare
@param N2 to compare to
@param IMap to operate with another set of numbers
@returns [[Boolean]]
@example
```ts
import {N} from 'ts-toolbelt.ts'

type test0 = N.GreaterEq<'7', '5'> // True
type test1 = N.GreaterEq<'5', '5'> // True
type test2 = N.GreaterEq<'5', '7'> // False
```
*/
export type GreaterEq<N1 extends Number, N2 extends Number, IMap extends Map = NumberMap> =
    N1 extends unknown
    ? N2 extends unknown
      ? _GreaterEq<IterationOf<N1, IMap>, IterationOf<N2, IMap>, IMap>
      : never
    : never
