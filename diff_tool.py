def print_diff(oldVersion, newVersion):
    """
        >>> print_diff("same_prefix_1233_same_suffix", "same_prefix23123_same_suffix")
        'same_prefix(_1)23[12]3_same_suffix'
        >>> print_diff("abcde", "abcdef")
        'abcde[f]'
        >>> print_diff("abcd", "abc")
        'abc(d)'
        >>> print_diff("abcabcdef", "abc34abcdef")
        'abc[34]abcdef'

    """
    from difflib import Differ

    d = Differ()

    result = list(d.compare(oldVersion, newVersion))

    output = ""
    i = 0
    while i < len(result):
        if result[i][0] == ' ':
            output += result[i][2:]
            i += 1

        elif result[i][0] == '+':
            pos = i 
            substring = ''
            while pos < len(result) and result[pos][0] == '+':
                substring += result[pos][2:]
                pos += 1
            output += "[" + substring + "]"
            i += len(substring)

        elif result[i][0] == '-':
            pos = i 
            substring = ''
            while pos < len(result) and result[pos][0] == '-':
                substring += result[pos][2:]
                pos += 1
            output += "(" + substring + ")"
            i += len(substring)

    return output







if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print "\n ALL TESTS PASSED!! \n"