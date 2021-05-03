# Selection Sort


**we are going to trace this array [8,4,23,42,16,15]**

1. for the first loop we look if there is any smaller number in the array than i[0] ,we find it right away in i[1]. then we replace the indeces between them the smallest became in i[0] and the largest will be in i[1]
    - the first outcome = [*4*,**8**,23,42,16,15];

2. in the second loop we now test for i[1] which it=8 we look in the rest of the array if there is a smaller number, there is'nt then we will keep it at it place and turn to the next index.
    - the second outcome= [*4*,**8**,23,42,16,15]

3. in the third loop we now test for i[2] which it=23 we look in the rest of the array if there is a smaller number, yes there is 15 then the 15 will be the value of i[2] and the 23  will be the value of i[5];
    - the second outcome= [4,8,*15*,42,16,*23*]

4. in the fourth loop we now test for i[3] which it=42 we look in the rest of the array if there is a smaller number, yes there is 16 then the 16 will be the value of i[3] and the 42  will be the value of i[4];
    - the second outcome= [4,8,15,*16*,*42*,23]

5. in the fifth loop we now test for i[4] which it=42 we look in the rest of the array if there is a smaller number, yes there is 23 then the 23 will be the value of i[4] and the 42  will be the value of i[5];
   - the second outcome= [4,8,15,16,*23*,*42*]

5. in the last loop we now test for i[5] which it=42 and it's the last index it will still in the same place because the while loop will not run.
   - the second outcome= [4,8,15,16,23,*42*]
