import flatten from "just-flatten-it";
import merge from "just-merge";
import last from 'just-last';

export default function benchmark(objectA, objectB, array) {
    return [merge(objectA, objectB), flatten(array), last(array)];
}
