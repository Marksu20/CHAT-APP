const chatData = [
  {
    id: 1,
    users: [
      {
        uid: "1",
        email: "catchatuser@test.com",
        fullName: "Kiki Bakuki",
        username: "kikibakuki924",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        status: "online",
        lastSeen: {
          seconds: 1694955720, // 2023-09-17T09:02:00Z
          nanoseconds: 250000000
        },
      },
      {
        uid: "2",
        email: "someone@gmail.com",
        fullName: "Someone",
        username: "someone",
        status: "offline",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        lastSeen: {
          seconds: 1694955840, // 2023-09-17T09:04:00Z
          nanoseconds: 300000000
        },
      },
    ],
    lastMessageTimeStamp: {
      seconds: 1694955720,
      nanoseconds: 250000000
    },
    lastMessage: "Hey! I see you're into hiking. What's the best trail you've ever been on?",
  },
  {
    id: 2,
    users: [
      {
        uid: "3",
        email: "catchatuser@test.com",
        fullName: "Alice Smith",
        username: "alice",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        status: "online",
        lastSeen: {
          seconds: 1694955900, // 2023-09-17T09:05:00Z
          nanoseconds: 100000000
        },
      },
      {
        uid: "4",
        email: "bob@example.com",
        fullName: "Bob Lee",
        username: "bob",
        status: "online",
        image: "https://randomuser.me/api/portraits/men/66.jpg",
        lastSeen: {
          seconds: 1694955960, // 2023-09-17T09:06:00Z
          nanoseconds: 800000000
        },
      },
    ],
    lastMessageTimeStamp: {
      seconds: 1694955950,
      nanoseconds: 500000000
    },
    lastMessage: "Your dog is so cute! What's their name?",
  },
  {
    id: 3,
    users: [
      {
        uid: "5",
        email: "catchatuser@test.com",
        fullName: "Charlie Brown",
        username: "charlie",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        status: "offline",
        lastSeen: {
          seconds: 1694956000, // 2023-09-17T09:06:40Z
          nanoseconds: 0
        },
      },
      {
        uid: "6",
        email: "dana@example.com",
        fullName: "Dana White",
        username: "dana",
        status: "online",
        image: "https://randomuser.me/api/portraits/women/13.jpg",
        lastSeen: {
          seconds: 1694956020, // 2023-09-17T09:07:00Z
          nanoseconds: 200000000
        },
      },
    ],
    lastMessageTimeStamp: {
      seconds: 1694956010,
      nanoseconds: 900000000
    },
    lastMessage: "That's a cool band on your profile! Have you heard their new album?",
  },
  {
    id: 4,
    users: [
      {
        uid: "7",
        email: "catchatuser@test.com",
        fullName: "Eve Adams",
        username: "eve",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        status: "online",
        lastSeen: {
          seconds: 1694956100, // 2023-09-17T09:08:20Z
          nanoseconds: 300000000
        },
      },
      {
        uid: "8",
        email: "frank@example.com",
        fullName: "Frank Miller",
        username: "frank",
        status: "offline",
        image: "https://randomuser.me/api/portraits/men/23.jpg",
        lastSeen: {
          seconds: 1694956120, // 2023-09-17T09:08:40Z
          nanoseconds: 600000000
        },
      },
    ],
    lastMessageTimeStamp: {
      seconds: 1694956110,
      nanoseconds: 700000000
    },
    lastMessage: "I'm also trying to learn guitar. Any tips for beginners?",
  },
];

export default chatData;