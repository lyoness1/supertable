"""
Given a deck of n cards, cut the deck c cards from the top. 
Perform a perfect shuffle (bottom card from top half first). 
How many shuffles does it take to return to the original deck
"""

def count(n, c):

    # create a deck, cut it, and shuffle it once to map a pattern
    # create original deck
    original_deck = [x for x in xrange(n)]
    print original_deck
    # cut the deck 
    bottom, top = original_deck[:n-c], original_deck[n-c:]
    # shuffle cards back together
    pattern_deck = shuffle(bottom, top)
    print pattern_deck

    # initialize a map to see how many shuffles each card takes to return
    counts_to_return = [0] * n

    # initialize a counter
    num_shuffles = 0L

    # use pattern_deck to continue shuffling
    # if a card returns to its index, record number of shuffles 
    curr_deck = original_deck
    while 0 in counts_to_return:

        # create a new deck to store cards after the shuffle
        new_deck = [0] * n

        # shuffle curr_deck into new_deck, using pattern_deck as map
        for i in range(n):
            new_deck[i] = curr_deck[pattern_deck[i]]

        # increment num_shuffles
        num_shuffles += 1

        # check to see if any cards returned to their original position
        for idx, card in enumerate(new_deck):
            if card == idx and counts_to_return[idx] == 0:
                counts_to_return[idx] = num_shuffles
        print counts_to_return
        curr_deck = new_deck

    # get all num_shuffles for each card from counts_to_return
    counts = set()
    for count in counts_to_return:
        if count not in counts:
            counts.add(count)

    least_comm_mult = lcmm(counts)

    print least_comm_mult


# perform a perfect shuffle on two different sized decks
def shuffle(bottom, top):
    """Perform a perfect shuffle on two different sized decks"""

    bottom.reverse()
    top.reverse()

    deck = []

    while top and bottom: 
        deck.append(top.pop())
        deck.append(bottom.pop())

    if not top: 
        bottom.reverse()
        deck.extend(bottom)
    else:
        top.reverse()
        deck.extend(top)

    return deck


# find the least common multiple of mulitple numbers
def gcd(a,b):
    """Compute the greatest common divisor of a and b"""
    while b > 0:
        a, b = b, a % b
    return a
    
def lcm(a, b):
    """Compute the lowest common multiple of a and b"""
    return a * b / gcd(a, b)

def lcmm(iterable):
    """Return lcm of an iterable set of integers"""   
    return reduce(lcm, iterable)




if __name__ == '__main__':
    import timeit
    start = timeit.default_timer()
    count(7, 2)
    end = timeit.default_timer()
    print end - start