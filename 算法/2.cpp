#include <iostream>
using namespace std;

#define MAXSIZE 100
int w[MAXSIZE];
int v[MAXSIZE];
int maxv;
int n;
int dp[MAXSIZE][MAXSIZE];

int max(int a, int b)
{
    if (a > b)
        return a;
    else
        return b;
}

int main()
{
    cin >> n >> maxv;
    for (int i = 1; i <= n; i++)
    {
        cin >> w[i] >> v[i];
    }
    for (int i = 0; i <= maxv; i++)
        dp[0][i] = 0;

    for (int i = 1; i <= n; i++)
    {
        //只有当j >= w[i],dp[i][j]才能进行选取最大值
        for (int j = maxv; j >= w[i]; j--)
        {
            dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - w[i]] + v[i]);
        }
        
        //当j < w[i]，说明第i个物品是不能转入背包的，故dp[i][j] = dp[i-1][j]
        for (int j = w[i] - 1; j >= 0; j--)
            dp[i][j] = dp[i - 1][j];
    }

    cout << dp[n][maxv] << endl;
    return 0;
}