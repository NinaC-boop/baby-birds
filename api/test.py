id = 1
published = "1992"
author = "nina"

query = "SELECT * FROM books WHERE"
to_filter = []

if id:
    query += ' id=? AND'
    to_filter.append(id)
if published:
    query += ' published=? AND'
    to_filter.append(published)
if author:
    query += ' author=? AND'
    to_filter.append(author)
if not (id or published or author):
    print('not found')

query = query[:-4] + ';'

print(query)
print(to_filter)
