Explanation of the longestPalindrome Function
=============================================

The longestPalindrome function finds the longest palindromic substring within a given string s. This implementation uses Manacher's Algorithm, which efficiently solves the problem in linear time. Below is a detailed explanation of each part of the code.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   typescriptCopy code/**   * @param {string} s   * @return {string}   */  const longestPalindrome = (s: string): string => {    if (s.length === 0) return "";   `

### Input Check

*   The function accepts a single parameter s, which is a string.
    
*   If the input string is empty, the function immediately returns an empty string.
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   typescriptCopy code  const t = "$" + s.split("").join("$") + "$";    const n = t.length;    const p: number[] = Array(n).fill(0);    let center = 0;    let right = 0;   `

### Transforming the Input String

*   The string s is transformed into a new string t by inserting a special character $ between each character and at the ends. This helps to handle even-length palindromes uniformly.
    
*   The length of the transformed string t is stored in n.
    
*   An array p is initialized to keep track of the radius of the palindrome centered at each position in t.
    
*   Two variables, center and right, are initialized to manage the current center and the right edge of the rightmost palindrome found so far.
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   typescriptCopy code  let maxLength = 0;    let maxCenter = 0;   `

### Tracking the Longest Palindrome

*   Variables maxLength and maxCenter are initialized to store the length and center of the longest palindrome found.
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   typescriptCopy code  for (let i = 0; i < n; i++) {      const mirror = 2 * center - i;      if (i < right) {        p[i] = Math.min(right - i, p[mirror]);      }   `

### Main Loop: Expanding Around Centers

*   The main loop iterates over each character in the transformed string t.
    
*   For each position i, the corresponding position mirror on the left side of the center is calculated.
    
*   If i is within the right boundary of the current palindrome (i < right), the minimum radius is determined either by the distance to the right boundary or by the radius of the palindrome centered at mirror.
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   typescriptCopy code    while (        i + p[i] + 1 < n &&        i - p[i] - 1 >= 0 &&        t[i + p[i] + 1] === t[i - p[i] - 1]      ) {        p[i]++;      }   `

### Expanding the Palindrome

*   The while loop tries to expand the palindrome centered at i as long as the characters on both sides are equal and within bounds.
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   typescriptCopy code    if (i + p[i] > right) {        center = i;        right = i + p[i];      }      if (p[i] > maxLength) {        maxLength = p[i];        maxCenter = i;      }    }   `

### Updating the Center and Right Boundary

*   If the expanded palindrome extends beyond the current right boundary, the center and right boundary are updated.
    
*   If the radius p\[i\] of the palindrome centered at i is greater than maxLength, maxLength and maxCenter are updated.
    

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   typescriptCopy code  const start = Math.floor((maxCenter - maxLength) / 2);    return s.substring(start, start + maxLength);  };   `

### Extracting the Longest Palindrome

*   The starting index of the longest palindrome in the original string s is calculated.
    
*   The function returns the substring of s that corresponds to the longest palindromic substring.
    

This implementation efficiently finds the longest palindromic substring using Manacher's Algorithm, which ensures a linear runtime complexity of O(n)O(n)O(n).