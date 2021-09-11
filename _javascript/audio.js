let da = ''

function balancedParens(n, match=0, str='', res=[]) {
    if (n) balancedParens(n-1, match+1, str+'(', res);
    if (match) balancedParens(n, match-1, str+')', res);
    if (!n && !match) res.push(str);
    return res;
  }

da = balancedParens(4)
console.log(da)


for (let i = 0; i < 10 ; i++) {
    console.log(da[i])
}

