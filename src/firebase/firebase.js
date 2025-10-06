import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, onSnapshot, doc, getDoc, setDoc, addDoc, updateDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDIvvadddbkpP_u7pADH1QjFdIoqQxXjao",
  authDomain: "chat-app-8668f.firebaseapp.com",
  projectId: "chat-app-8668f",
  storageBucket: "chat-app-8668f.firebasestorage.app",
  messagingSenderId: "503628605141",
  appId: "1:503628605141:web:5190aec128a67032d3e45c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const listenForChats = (setChats) => {
  const chatsRef = collection(db, 'chats');
  const unsubscribe = onSnapshot(chatsRef, (snapshot) => {
    const chatList = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    
    const filteredChats = chatList.filter((chat) => chat?.users?.some((user) => user.email === auth.currentUser.email ));

    setChats(filteredChats);
  });

  return unsubscribe;
};

export const sendMessage = async (messageText, chatId, user1, user2) => {
  const chatRef = doc(db, 'chats', chatId);
  
  const user1Doc = await getDoc(doc(db, 'users', user1));
  const user2Doc = await getDoc(doc(db, 'users', user2));

  const user1Data = user1Doc.data();
  const user2Data = user2Doc.data();

  const chatDoc = await getDoc(chatRef);
  if (!chatDoc.exists()) {
    await setDoc(chatRef, { 
      users: [user1Data, user2Data], 
      lastMessage: messageText,
      lastMessageTimeStamp: serverTimestamp(),
    });
  } else {
    await updateDoc(chatRef, {
      lastMessage: messageText,
      lastMessageTimeStamp: serverTimestamp(),
    });
  }

  const messageRef = collection(db, 'chats', chatId, 'messages');

  await addDoc(messageRef, {
    text: messageText,
    sender: auth.currentUser.email,
    timestamp: serverTimestamp(),
  });
};

export const listenForMessages = (chatId, setMessages) => {
  const chatRef = collection(db, 'chats', chatId, 'messages');
  onSnapshot(chatRef, (snapshot) => {
    const messages = snapshot.docs.map((doc) => doc.data());
    setMessages(messages);
  })
}

export { auth, db };