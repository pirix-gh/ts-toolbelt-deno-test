import {MergeFlat} from './Merge.ts'
import {Nullable as UNullable} from '../Union/Nullable.ts'
import {Depth} from './_Internal.ts'
import {Pick} from './Pick.ts'
import {Key} from '../Any/Key.ts'
import {Implements} from '../Any/Implements.ts'
import {Keys} from './Keys.ts'

/**
@hidden
*/
export type NullableFlat<O> = {
    [K in keyof O]: UNullable<O[K]>
} & {}

/**
@hidden
*/
export type NullableDeep<O> = {
    [K in keyof O]: NullableDeep<UNullable<O[K]>>
}

/**
@hidden
*/
type NullablePart<O extends object, depth extends Depth> = {
    'flat': NullableFlat<O>,
    'deep': NullableDeep<O>,
}[depth]

/**
Make some fields of **`O`** nullable (deeply or not)
@param O to make nullable
@param K (?=`Key`) to choose fields
@param depth (?=`'flat'`) to do it deeply
@returns [[Object]]
@example
```ts
```
*/
export type Nullable<O extends object, K extends Key = Key, depth extends Depth = 'flat'> = {
    1: NullablePart<O, depth>
    0: MergeFlat<NullablePart<Pick<O, K>, depth>, O>
    // Pick a part of O (with K) -> nullable -> merge it with O
}[Implements<Keys<O>, K>] & {}
