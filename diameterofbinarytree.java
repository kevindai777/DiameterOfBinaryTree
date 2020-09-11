//Java Code

class Solution {
    int ans = 0;
    public int diameterOfBinaryTree(TreeNode root) {
        dfs(root);
        return ans;
    }
    
    public int dfs(TreeNode node) {
        if (node == null) {
            return 0;
        }
        
        int left = dfs(node.left);
        int right = dfs(node.right);
        
        ans = Math.max(ans, left + right);
        return Math.max(left, right) + 1;
    }
}