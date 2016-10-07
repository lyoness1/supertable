def compress(s, width):
    """
        >>> compress("ababcaa", 3)
        'ab(0,2)c(2,1)(5,1)'
        >>> compress("aaaaaaaaaaaa", 6)
        'a(0,1)(0,2)(0,4)(2,4)'

    """

    output = ""
    i = 0

    while i < len(s):
        window_start = max(0, i - width)
        window_end = min(i, len(s) + 1)
        window = s[window_start : window_end]
        # print "i: ", i
        # print "s: ", s
        # print "s[i]: ", s[i]
        # print "window: ", window

        if s[i] not in window:
            output += s[i]
            # print "output: ", output
            i += 1

        else:
            sub_string = s[i:i+len(window)]
            # print "sub_string", sub_string
            while len(sub_string) > 0:
                if sub_string in window:
                    start_idx_in_window = window.index(sub_string)
                    output += "(%i,%i)" % (start_idx_in_window + window_start,
                                           len(sub_string))
                    break
                else:
                    sub_string = sub_string[:-1]
            
            i += len(sub_string)


    return output






if __name__ == '__main__':
    import doctest
    if doctest.testmod().failed == 0:
        print "\n ALL TESTS PASSED!! \n"