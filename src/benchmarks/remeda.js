import {merge} from "remeda";
import {flatten} from "remeda";
import {last} from "remeda";

export default function benchmark(objectA, objectB, array) {
    return [merge(objectA, objectB), flatten(array), last(array)];
}
