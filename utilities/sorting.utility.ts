export class SortingUtility {
    public static isAscendingOrder(arr: Number[] | String[]): Boolean {
        return arr.every((v, i) => !i || v >= arr[i - 1]);
    }
}
