import {Iteration} from '../Iteration/Iteration.ts'
import {IterationOf} from '../Iteration/IterationOf.ts'
import {Merge} from './Merge.ts'
import {Pos} from '../Iteration/Pos.ts'
import {Next} from '../Iteration/Next.ts'
import {Length} from '../List/Length.ts'
import {Cast} from '../Any/Cast.ts'
import {List} from '../List/List.ts'
import {Extends} from '../Any/Extends.ts'
import {Depth} from './_Internal.ts'

/**
@hidden
*/
type __Assign<O extends object, Os extends List<object>, depth extends Depth, I extends Iteration = IterationOf<'0'>> = {
    0: __Assign<Merge<Os[Pos<I>], O, depth>, Os, depth, Next<I>>
    1: O
}[Extends<Pos<I>, Length<Os>>]


/**
@hidden
*/
export type _Assign<O extends object, Os extends List<object>, depth extends Depth> =
    __Assign<O, Os, depth> extends infer X
    ? Cast<X, object>
    : never

/**
Assign a list of [[Object]] into **`O`** with [[Merge]] (last-in overrides)
@param O to assign to
@param Os to assign
@param depth (?=`'flat'`) to do it deeply
@returns [[Object]]
@example
```ts
```
*/
export type Assign<O extends object, Os extends List<object>, depth extends Depth = 'flat'> =
    O extends unknown
    ? Os extends unknown
      ? _Assign<O, Os, depth>
      : never
    : never
