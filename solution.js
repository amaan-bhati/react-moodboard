/**
 * @param {number[]} nums
  * @return {number[][]}
   */
var permute = function (nums) {
    const result = [];
    backtrack(nums, [], result);
    return result;
};

function backtrack(nums, path, result) {
    if (path.length === nums.length) {
        result.push([...path]);
        return;
    }

    for (let num of nums) {
        if (!path.includes(num)) {
            path.push(num);
            backtrack(nums, path, result);
            path.pop();
        }
    }
}
                                                                                                       