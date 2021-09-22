---
layout: post
title: Is Privacy Being Privatized Out of Existence?
date: 2006-09-05 09:49
author: metavalent
comments: true
categories: [histrionics, society]
---
<!--Lead Photo --><a href="http://inbox.com/"><img src="http://metavalent.info/images/inbox.com.logo.gif" border="0" alt="0" align="left" /></a><!-- Commentary -->This is a LONG one, in two parts.  First, a little bit about Inbox.com.  Secondly, I'll explain why the service fits in with the subject of this post.

I have no affiliation with inbox, other than I've been fairly impressed with the amount of email and net storage provided.  The web application suite is a wee bit slow to load on my vintage 2004 1GHz CPU + 1GB RAM TabletPC, but it's an interesting approach to integrated email and storage along with many more useful features (unlimited filters, folders, "from" addresses, etc) than the average free email provider.

The free account provides:<blockquote><ul><li></li>5 GB email<li></li>20 MB attachments (up to 50 MB with desktop tool)<li></li>Desktop tool for super easy access to online storage</ul>Meanwhile, for $30 bucks a YEAR, you get:&gt;<ul><li></li>30 GB email<li></li>Daily backups<li></li>All the stuff from above</ul></blockquote>I-eff'n-ronically, today I found my first real glitch in the service.  I used POP to fetch about 3,500 old emails from Yahoo (which I recently abandoned after 10 years of loyal patronage) only to suddenly find my Inbox.com account BLOCKED.  The message is:

"Your account is blocked. Block reason code: 5"

Which I post here in hopes that others who might encounter that error, may eventually find this indexed by the search engines.

The entire reason that I left Yahoo was after a series of debates with them over alleged "unauthorized access" attempts on my account.  Yahoo would lock my account, claim it had been compromised, and have me go through a process of verifying my information.  This began to occur with increasing frequency and when I asked for EVIDENCE of the compromise to MY INFORMATION, I was met with the email equivalent of a blank stare.  

Eventually, one of the "smart" droids at Yahoo support suggested that I had some kind of trojan horse on my system ... you know, the suspect PC that is scanned EVERY NIGHT and that nary a file nor email is handled but it is SCANNED first.  Moreover, I am fairly diligent in terms of picking difficult passwords (UPPER and lower cAsE, numb3rs, and punctuat!on) and changing them regularly.  So it's highly, highly unlikely that the system was compromised.  Nevertheless, knowing all too well that pride goeth before a fall, and just in case, I did an fdisk /mbr and ditched the entire hard drive, partitions and all and rebuilt from scratch.  Since Windows lacks anything even remotely as lightweight and fast as <a href="http://www.freebsd.org/doc/en_US.ISO8859-1/books/handbook/backup-basics.html">BSD's cpio or dump in a cron job</a>, I have long since learned to put EVERYTHING in "My Documents" and then batch religiously by <a href="http://www.xxcopy.com/">XXCOPY</a> to another drive ... or two.

And yet, after all that to BE SURE that the problem wasn't at my end -- same problem.

So, amidst those changes, what constants HADN'T changed, my cheerfully scientific minded readers ask?

<a href="http://anonymizer.com/">Anonymizer</a> and <a href="http://tor.eff.org/">Tor</a>, both of which I use for all my web surfing, along with FoxyProxy on Firefox.  Both products are from reputable companies, <a href="http://anonymizer.com/consumer/media/press_releases/03062006.html">Anonymizer, Inc.</a> and <a href="http://www.eff.org/">Electronic Frontier Foundation</a>, working to promote and extend Identity Protection and Data Integrity to the far reaches of the net.  

Which brings me back to the latest "Your account is blocked. Block reason code: 5" from Inbox.Com.  Of course, once my account is blocked, when I go to the web site and click on the friendly Support icon, I am also prevented from filing said ticket as a subscriber to the service.  To wit:


<img src="http://metavalent.info/images/inbox.com.blocked.00.jpg" />


Nope.  Once you're blocked, you're as suspect as anyone else on the net, despite being armed with all your own personally identifying information; father's second dog's middle name, grandmother's kindergarten teacher's maiden name, etc.


<img src="http://metavalent.info/images/inbox.com.blocked.01.jpg" />


Lest it be misunderstood that I'm picking on Inbox.com, let me clarify: THIS ALMOST PERFECTLY PARALLEL'S MY EXPERIENCE AT YAHOO.  In other words, in both places, the only common factor that I can possibly come up with is my use of encryption.

Joining the party a few weeks ago was <a href="http://www.tdameritrade.com/">TD Ameritrade</a> (AMTD), another company that I have happily patronized online, for years.  Suddenly, out of the blue, I got a message that my account had been compromised.  I was, of course, THRILLED that my online broker is paying attention to anything even remotely funny regarding my MONEY.  However, after following their prompts to change my login and password and talking with some very knowledgeable IT folks (take note, these people at AMTD were perhaps the most helpful of all Tech Support people I've ever encountered), I suggested that this might have something to do with my use of Anonymizing Proxies.  "Oh, you use Anonymizer?" cam the clueful response.  "Yeah, I won't go online without it or Tor running at all times."  The IT guys at AMTD thought it was indeed likely that my account had been shut down for access from "a suspicious IP address" that was not at all suspicious, but merely PROTECTED BY ENCRYPTION.

Of the three cases here, AMTD said they'd made a note of the fact that I'm an Anonymizer users, and I haven't had a single problem, since.  They also didn't even hesitate to send me the "suspicious" IP address, which I was able to confirm as being an anonymized IP.

Yahoo would never even entertain the idea of letting me know of what their evidence of account tampering consisted.  I specifically asked for relevant portions of log files or "suspicious IP addresses so that I could help them.  Not a chance.  And lest my readers chastise me with "well, you get the service for free," the fact is that no, I don't.  I've paid for Yahoo Plus for years.

I have yet to hear back from Inbox.com on this latest lockdown.  I very much suspect, however, that a growing number of private companies are beginning to take measures to discourage use of client-initiated encryption.  

So, is privacy being privatized out of existence?

If you've got similar cases to report, I'm sure we'd love to hear about them in comments.  Better yet, if you have any good ideas or solution resources, please do share them.

<!-- Tags --><div align="right">

<img src="http://metavalent.info/images/technorati.bug.10x10.jpg" align="absbottom" border="0"/> <a href="http://technorati.com/tag/metavalent" rel="tag">metavalent</a>, <a href="http://technorati.com/tag/encryption" rel="tag">encryption</a>, <a href="http://technorati.com/tag/privacy" rel="tag">privacy</a>, <a href="http://technorati.com/tag/identity+protection" rel="tag">identity protection</a>
</div><!-- //End Tags -->
