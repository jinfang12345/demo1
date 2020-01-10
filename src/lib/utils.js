/**
 * 封裝logs方法， 实现log打印，当不需要在控制台输出log的時候通过修改logs方法，实现禁止控制台输出。
 */
export function logs(){
    console.log(...arguments);
}
