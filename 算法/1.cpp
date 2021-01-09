#include <iostream>
using namespace std;

#define M 100

int w[M];
int v[M];
int maxv;
int n;
int dp[M];

/*
5
50
1
1
2
2
3
3
4
4
5
5
1 1 2 2 3 3 4 4 5 5 
dp[j]1，j = 50
dp[j]1，j = 49
dp[j]1，j = 48
dp[j]1，j = 47
dp[j]1，j = 46
dp[j]1，j = 45
dp[j]1，j = 44
dp[j]1，j = 43
dp[j]1，j = 42
dp[j]1，j = 41
dp[j]1，j = 40
dp[j]1，j = 39
dp[j]1，j = 38
dp[j]1，j = 37
dp[j]1，j = 36
dp[j]1，j = 35
dp[j]1，j = 34
dp[j]1，j = 33
dp[j]1，j = 32
dp[j]1，j = 31
dp[j]1，j = 30
dp[j]1，j = 29
dp[j]1，j = 28
dp[j]1，j = 27
dp[j]1，j = 26
dp[j]1，j = 25
dp[j]1，j = 24
dp[j]1，j = 23
dp[j]1，j = 22
dp[j]1，j = 21
dp[j]1，j = 20
dp[j]1，j = 19
dp[j]1，j = 18
dp[j]1，j = 17
dp[j]1，j = 16
dp[j]1，j = 15
dp[j]1，j = 14
dp[j]1，j = 13
dp[j]1，j = 12
dp[j]1，j = 11
dp[j]1，j = 10
dp[j]1，j = 9
dp[j]1，j = 8
dp[j]1，j = 7
dp[j]1，j = 6
dp[j]1，j = 5
dp[j]1，j = 4
dp[j]1，j = 3
dp[j]1，j = 2
dp[j]1，j = 1
dp[j]3，j = 50
dp[j]3，j = 49
dp[j]3，j = 48
dp[j]3，j = 47
dp[j]3，j = 46
dp[j]3，j = 45
dp[j]3，j = 44
dp[j]3，j = 43
dp[j]3，j = 42
dp[j]3，j = 41
dp[j]3，j = 40
dp[j]3，j = 39
dp[j]3，j = 38
dp[j]3，j = 37
dp[j]3，j = 36
dp[j]3，j = 35
dp[j]3，j = 34
dp[j]3，j = 33
dp[j]3，j = 32
dp[j]3，j = 31
dp[j]3，j = 30
dp[j]3，j = 29
dp[j]3，j = 28
dp[j]3，j = 27
dp[j]3，j = 26
dp[j]3，j = 25
dp[j]3，j = 24
dp[j]3，j = 23
dp[j]3，j = 22
dp[j]3，j = 21
dp[j]3，j = 20
dp[j]3，j = 19
dp[j]3，j = 18
dp[j]3，j = 17
dp[j]3，j = 16
dp[j]3，j = 15
dp[j]3，j = 14
dp[j]3，j = 13
dp[j]3，j = 12
dp[j]3，j = 11
dp[j]3，j = 10
dp[j]3，j = 9
dp[j]3，j = 8
dp[j]3，j = 7
dp[j]3，j = 6
dp[j]3，j = 5
dp[j]3，j = 4
dp[j]3，j = 3
dp[j]2，//重量， j = 2
dp[j]6，j = 50
dp[j]6，j = 49
dp[j]6，j = 48
dp[j]6，j = 47
dp[j]6，j = 46
dp[j]6，j = 45
dp[j]6，j = 44
dp[j]6，j = 43
dp[j]6，j = 42
dp[j]6，j = 41
dp[j]6，j = 40
dp[j]6，j = 39
dp[j]6，j = 38
dp[j]6，j = 37
dp[j]6，j = 36
dp[j]6，j = 35
dp[j]6，j = 34
dp[j]6，j = 33
dp[j]6，j = 32
dp[j]6，j = 31
dp[j]6，j = 30
dp[j]6，j = 29
dp[j]6，j = 28
dp[j]6，j = 27
dp[j]6，j = 26
dp[j]6，j = 25
dp[j]6，j = 24
dp[j]6，j = 23
dp[j]6，j = 22
dp[j]6，j = 21
dp[j]6，j = 20
dp[j]6，j = 19
dp[j]6，j = 18
dp[j]6，j = 17
dp[j]6，j = 16
dp[j]6，j = 15
dp[j]6，j = 14
dp[j]6，j = 13
dp[j]6，j = 12
dp[j]6，j = 11
dp[j]6，j = 10
dp[j]6，j = 9
dp[j]6，j = 8
dp[j]6，j = 7
dp[j]6，j = 6
dp[j]5，j = 5
dp[j]4，j = 4
dp[j]3，j = 3
dp[j]10，j = 50
dp[j]10，j = 49
dp[j]10，j = 48
dp[j]10，j = 47
dp[j]10，j = 46
dp[j]10，j = 45
dp[j]10，j = 44
dp[j]10，j = 43
dp[j]10，j = 42
dp[j]10，j = 41
dp[j]10，j = 40
dp[j]10，j = 39
dp[j]10，j = 38
dp[j]10，j = 37
dp[j]10，j = 36
dp[j]10，j = 35
dp[j]10，j = 34
dp[j]10，j = 33
dp[j]10，j = 32
dp[j]10，j = 31
dp[j]10，j = 30
dp[j]10，j = 29
dp[j]10，j = 28
dp[j]10，j = 27
dp[j]10，j = 26
dp[j]10，j = 25
dp[j]10，j = 24
dp[j]10，j = 23
dp[j]10，j = 22
dp[j]10，j = 21
dp[j]10，j = 20
dp[j]10，j = 19
dp[j]10，j = 18
dp[j]10，j = 17
dp[j]10，j = 16
dp[j]10，j = 15
dp[j]10，j = 14
dp[j]10，j = 13
dp[j]10，j = 12
dp[j]10，j = 11
dp[j]10，j = 10
dp[j]9，j = 9
dp[j]8，j = 8
dp[j]7，j = 7
dp[j]6，j = 6
dp[j]5，j = 5
dp[j]4，j = 4
dp[j]15，j = 50
dp[j]15，j = 49
dp[j]15，j = 48
dp[j]15，j = 47
dp[j]15，j = 46
dp[j]15，j = 45
dp[j]15，j = 44
dp[j]15，j = 43
dp[j]15，j = 42
dp[j]15，j = 41
dp[j]15，j = 40
dp[j]15，j = 39
dp[j]15，j = 38
dp[j]15，j = 37
dp[j]15，j = 36
dp[j]15，j = 35
dp[j]15，j = 34
dp[j]15，j = 33
dp[j]15，j = 32
dp[j]15，j = 31
dp[j]15，j = 30
dp[j]15，j = 29
dp[j]15，j = 28
dp[j]15，j = 27
dp[j]15，j = 26
dp[j]15，j = 25
dp[j]15，j = 24
dp[j]15，j = 23
dp[j]15，j = 22
dp[j]15，j = 21
dp[j]15，j = 20
dp[j]15，j = 19
dp[j]15，j = 18
dp[j]15，j = 17
dp[j]15，j = 16
dp[j]15，j = 15
dp[j]14，j = 14
dp[j]13，j = 13
dp[j]12，j = 12
dp[j]11，j = 11
dp[j]10，j = 10
dp[j]9，j = 9
dp[j]8，j = 8
dp[j]7，j = 7
dp[j]6，j = 6
dp[j]5，j = 5
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15 15


 */

int max(int a, int b)
{
    return a>b?a:b;
}

int main()
{
    cin>>n>>maxv;  //n 10   个物品,  maxv 100容量100
    
    for (int i = 1; i <= n; i++)
    {
        cin >> w[i]>>v[i];//1,1,2,2,3,3,4,4,5,5....
    }
    
    for (int i =1; i <= n; i++)
    {
         cout << w[i] << " "<< v[i] << " ";
        
    }
   
     for (int i = 0; i <= maxv; i++)
        dp[i] = 0;//init

    for (int i = 1; i <= n; i++)
    {                                           //dp[i][j]
        //只有当j >= w[i],dp[j]才能进行选取最大值,否则dp[j]将不作更新，等于dp[i-1][j]。
        for (int j = maxv; j >= w[i]; j--)
        {
            dp[j] = max(dp[j], dp[j - w[i]] + v[i]);
            
              cout <<"dp[j]" <<dp[j]<<"j = " <<j<< endl;
        }
        
    }
    
    for (int i = 0; i <= maxv; i++)
    {
         cout << dp[i] << " ";
        
    }

    cout << dp[maxv] << endl;
    return 0;
    
}