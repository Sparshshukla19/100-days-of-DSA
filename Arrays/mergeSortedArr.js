/**MERGE SORTED ARRAY
 * array should be sorted
 * placeholder like 0 should not be there
 */

function mergeSortedArr(arr1,arr2){
    let arr3 = new Array(arr1.length+arr2.length);
    let i=0,j=0,k=0;

    while(i<arr1.length && j<arr2.length){
        if(arr1[i]>arr2[j]){
            arr3[k] = arr2[j];
            j++;
        }
        else{
            arr3[k] = arr1[i];
            i++;
        }
        k++;
    }
    while(i<arr1.length){
        arr3[k] = arr1[i];
        i++;
        k++;
    }
    while(j<arr2.length){
        arr3[k] = arr2[j];
        j++;
        k++;
    }
    return arr3;
}

// console.log(mergeSortedArr([4,9,12,19],[2,8,18]))

/**Leetcode 88 */

var merge = function(nums1, m, nums2, n) {
    let i = m-1;
    let j = n-1;
    let k = m+n-1;

    while(i>=0 && j>=0){
        if(nums1[i]>nums2[j]){
            nums1[k]=nums1[i];
            i--;
        }
        else{
            nums1[k]=nums2[j];
            j--
        }
        k--;
    }

    while(j>=0){
        nums1[k]=nums2[j];
        j--;
        k--;
    }
    return nums1;
};

// console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));