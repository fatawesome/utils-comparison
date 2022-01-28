import {mergeAll} from "ramda";
import {flatten} from "ramda";
import {last} from "ramda";

export default function benchmark(objectA, objectB, array) {
    return [mergeAll([objectA, objectB]), flatten(array), last(array)];
}
