
# Encryption Activity Reflection


## Part 1: Key Exchange

My Key:10
My Partner's Key: 6

Our initial shared key: 16

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
| so we may or may|  [so here is a link](https://docs.google.com/document/d/1o7jzGM0BWzv4xlEkbTsKW8zUSBLEl9XvYerYWYPpxhE/edit?usp=sharing)               |     |
| or may not have |                 |     |
| way to manny    |                 |     |
| messages        |                 |     |


## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But we know that the real message is in binary.

Select the first six characters from this message and copy them here: G7s2ky

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so thçat each character is 8 bits): 01000111 00110111 0111011 00110010 01101011 01111001

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information below with the binary values you computed above.

    =========
    Packet 1:

    Source: Lexi Kalish
    Destination:  Micah Kerns 
    Sequence: 1/3
    Data: 01000111 00110111
    =========
    Packet 2:

    Source: Lexi Kalish
    Destination: Micah Kerns
    Sequence: 2/3 
    Data: 0111011 00110010
    =========
    Packet 3:

    Source: Lexi Kalish
    Destination: Mikah Kerns
    Sequence: 3/3
    Data: 01101011 01111001
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What purpose did each serve in this simulation? symetric encryption was the +7 x3 or whatever it was, and the asymetric encryption was the sharing of the two keys for both parties. 
- Why is it important that this protocol uses a new key for each message? So that if a hacker mannaged to break in and sove a key, they would only get access to one message
- Why is it important that you never share your secret key? because then a good majority of your messages could be easily decripted - and message sent with your public key cna be decripted
- In the transport layer, do these messages use TCP or UDP? Why? probably TCP because it's not being livesteamed or on call, which are the UDP uses/ Since TCP will go back to make sure everything is there
- Now that you've created packets in the transport layer, give a short explanation of what happens to these packets in the internet layer and in the link layer. 
the packets get sent off into the internet and get sent to wearever they need to go. then wifi bluetooth whatever other physical stuff happens, and then the packets arive at the other computer
- This protocol successfully encrypts the **content** of the message. Even though and adversary in the middle can't read the content of the message, what other
information can they still see?
where there being sent from and both parties public key. If tey tried really hard they could find the symetric encription key though
