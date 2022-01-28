import merge from '@tinkoff/utils/object/merge'
import flatten from "@tinkoff/utils/array/flatten";
import last from "@tinkoff/utils/array/last";

export default function benchmark(objectA, objectB, array) {
    return [merge(objectA, objectB), flatten(array), last(array)];
}
