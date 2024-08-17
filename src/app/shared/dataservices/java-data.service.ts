import { Injectable } from "@angular/core";
import { Data, DataService } from "../utils/data-utils";

@Injectable({
  providedIn: "root",
})
export class JavaDataService extends DataService {
  override data: { [key: string]: Data } = {
    Java: new Data(
      "Java",
      "",
      "white",
      ["Learn the Fundamentals", "Getting Deeper", "Build Tools"],
      false,
      "0",
    ),
    "Learn the Fundamentals": new Data(
      "Java Fundamentals",
      `<div class="flex-1">
      <p>Java is a programming language and computing platform first released by Sun Microsystems in 1995.
        Java is a general-purpose, class-based, object-oriented programming language designed for having lesser implementation dependencies.
        It is a computing platform for application development.
         Java is fast, secure, and reliable.
        Therefore, it is widely used for developing Java applications in laptops, data centers, game consoles, scientific supercomputers, cell phones, etc.
         Learn about the fundamentals of Java such as basic syntax, data types, variables, conditionals, functions, data structures, packages, etc.</p></div>`,
      "yellow",
      [
        "Basic Syntax",
        "DataTypes, Variables",
        "Conditionals",
        "Data Structures",
        "OOP, Interface, Classes",
        "Packages",
        "Working with Files and APIs",
      ],
    ),

    "Basic Syntax": new Data(
      "Basic Syntax",
      `<div class="flex-1">
      <p>Understanding the basics is the key to a solid foundation. In this section, learn the basic terminologies, naming conventions, reserved words, conditions, functions, data structures, OOP, packages, etc.</p>
      <ul class="mt-6 space-y-1"><li>To print output use —> System.out.println();</li>
      <li>To take input from user —> Scanner or BufferedReader class can be used</li></ul>
      Visit the following resources to learn more:<br>
       <ul class="mt-6 space-y-1">
       <a href="https://www.youtube.com/watch?v=81piDKqPxjQ" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black">
       <span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-purple-300">video</span>Java- Basic Syntax</a><br>
       <a href="https://www.youtube.com/watch?v=RRubcjpTkks" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black">
       <span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-purple-300">video</span>Java Tutorial for Beginners</a>
      </div>
     `,
      "orange",
    ),

    "DataTypes, Variables": new Data(
      "DataTypes, Variables",
      `<div class="flex-1">
      <p>Variable in Java is a data container that stores the data values during Java program execution. Every variable is assigned a data type, which designates the type and quantity of values it can hold. Variable is a memory location name of the data. The Java variables have mainly three types: Local, Instance and Static.</p><br>
      Data Types are divided into two group - <br>
      <ul class="mt-6 space-y-1">
      <li>Primitive - byte,short,int,long,float,double,boolean and char</li>
      <li>Non-Primitive - String, Arrays, Classes, Enums and Records</li></ul><br>
      Visit the following resources to learn more:<br><br>
      <a href="https://www.guru99.com/java-variables.html" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black">
      <span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300">article</span>What are Data Types & Variables?</a><br>
      <a href="https://www.javatpoint.com/java-variables" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black">
      <span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300">article</span>Java Variables</a><br>
      <a href="https://www.javatpoint.com/java-data-types" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black">
      <span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300">article</span>Learn more about Data types and Variables</a><br>
      <a href="https://docs.oracle.com/javase/tutorial/java/javaOO/enum.html" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black">
      <span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300">article</span>Java enums</a><br>
      <a href="https://www.baeldung.com/java-record-keyword" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black">
      <span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300">article</span>Java Records</a><br>
      </div>`,
      "orange",
    ),

    Conditionals: new Data(
      "Conditionals",
      `<div class = "flex-1">
      <p>Java has the following conditional statements:</p>
       <ul class="mt-6 space-y-1">
       <li>Use <code>if</code> to specify a block of code to be executed, if a specified condition is true.</li>
       <li>Use <code>else</code> to specify a block of code to be executed if the same condition is false.</li>
       <li>Use <code>else if</code> to specify a new condition to test; if the first condition is false.</li>
       <li>Use <code>switch</code> to specify many alternative blocks of code to be executed.</li>
       <li>Use <code>?,:</code> operator to specify one line condition</li>
       </ul>
       Visit the following resources to learn more: <br>

       <ul class="mt-6 space-y-1">
       <a href="https://www.educative.io/answers/what-are-conditional-statements-in-programming" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black">
       <span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300">article</span>What are Conditional statements?</a><br>
       <a href="https://www.javatpoint.com/java-if-else" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black">
       <span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300">article</span>Conditionals in Java</a><br>

       <a href="https://www.youtube.com/watch?v=ldYLYRNaucM" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black">
       <span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-purple-300">video</span>Conditionals and Loops in Java</a><br>
       <a href="https://www.youtube.com/watch?v=mA23x39DjbI" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black">
       <span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-purple-300">video</span>Switch Statements + Nested Case in Java</a>
</ul>
      </div>`,
      "orange",
    ),

    "Data Structures": new Data(
      "Datastructures",
      `<div class="flex-1">
      <p>As the name indicates itself, a <strong>Data Structure</strong> is a way of organizing the data in the <strong>memory</strong> so that it can be used efficiently. Some common data structures are array, linked list, stack, hashtable, queue, tree, heap, and graph.</p>
      <ul class="mt-6 space-y-1">
      <li>Array allocates continuous memory for homogeneous data</li>
      <li>Linked List stores data in nodes with references</li>
      <li>Stack follows Last In First Out principle</li>
      <li>Queue follows First In First Out principle</li>
      </ul>

        Visit the following resources to learn more:<br>
        <ul class="mt-6 space-y-1">
        <a href="https://www.javatpoint.com/data-structure-tutorial" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black">
        <span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300">article</span>Data Structures and Algorithms</a><br>
        <a href="https://youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black">
        <span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-purple-300">video</span>Java + DSA + Interview Preparation Course</a><br>
        <a href="https://www.youtube.com/watch?v=9rhT3P1MDHk&amp;list=PLkZYeFmDuaN2-KUIv-mvbjfKszIGJ4FaY" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black">
        <span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-purple-300">video</span>Data Structures Illustrated</a>
        </ul></div>
        `,
      "orange",
    ),
    "OOP, Interface, Classes": new Data(
      "OOP",
      `<div class="flex-1">
      <p>Object-oriented programming is a core of Java Programming, which is used for designing a program using classes and objects. This can also be characterized as data controlling for accessing the code.
      </p>
      <ul>
      <li><a href="https://www.javatpoint.com/object-and-class-in-java" rel="noopener noreferrer nofollow" target="_blank">@article@Class</a></li>
      <li><a href="https://www.javatpoint.com/runtime-polymorphism-in-java" rel="noopener noreferrer nofollow" target="_blank">@article@Polymorphism</a></li>
      <li><a href="https://www.softwaretestinghelp.com/what-is-abstraction-in-java/" rel="noopener noreferrer nofollow" target="_blank">@article@Abstraction</a></li>
      <li><a href="https://www.programiz.com/java-programming/encapsulation" rel="noopener noreferrer nofollow" target="_blank">@article@Encapsulation</a></li>
      </ul>

      Visit the following resources to learn more:<br>
      <ul class="mt-6 space-y-1">
      <a href="https://www.javatpoint.com/java-oops-concepts" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300">article</span>Java OOPs Concepts</a><br>
      <a href="https://youtube.com/playlist?list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-purple-300">video</span>Java complete OOPs playlist</a><br>
      <a href="https://www.youtube.com/watch?v=6T_HgnjoYwM" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-purple-300">video</span>Java OOPs Concepts</a></ul>

      </div>
      `,
      "orange",
    ),
    Packages: new Data(
      "Packages",
      `<div class="flex-1">
      <p>A package is a namespace that mainly contains classes and interfaces. For instance, the standard class <code>ArrayList</code> is in the package <code>java.util</code>. For this class, <code>java.util.ArrayList</code> is called its fully qualified name because this syntax has no ambiguity. Classes in different packages can have the same name. For example, you have the two classes <code>java.util.Date</code>and <code>java.sql.Date</code>, which are different. If no package is declared in a class, its package is the default package.
      </p><br>
      To create package use this command -> javac -d directory javafilename <br><br>
      Visit the following resources to learn more: <br>
      <ul class="mt-6 space-y-1">
      <a href="https://docs.oracle.com/javase/8/docs/api/java/lang/Package.html" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300">article</span>Packages in Java</a><br>
      <a href="https://www.javatpoint.com/package" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300">article</span>Java Package</a></ul>

      </div>`,
      "orange",
    ),

    "Working with Files and APIs": new Data(
      "Files and APIs",
      `<div class="flex-1">
      <p>Learn how to work with files i.e., reading, writing and deleting, files and folders, etc. Also, learn how to make API calls, parse the incoming response, and so on.</p>
      <ul class="mt-6 space-y-1"><li><code>FileWriter </code>- this class is useful to create a file by writing characters into it.</li>
      <li><code>FileReader</code> - this class is useful to read data in form of characters from file.</li>
      <li><code>Files.lines(Paths.get("file.txt")))</code> - processing the files as a stream. Since Java 8.</li>
      <li><code>Files.readString / Files.writeString</code> - reads the whole file and puts it into a string - since Java 11.</li></ul>
      Visit the following resources to learn more:
      <ul class="mt-6 space-y-1">
      <a href="https://www.marcobehler.com/guides/java-files" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300">article</span>How To Work With Files In Java</a><br>
      <a href="https://www.javatpoint.com/java-file-class" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300">article</span>Java File Class</a><br>
     <a href="https://www.digitalocean.com/community/tutorials/java-httpurlconnection-example-java-http-request-get-post" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300">article</span>(old) Java HttpURLConnection Example - Java HTTP Request GET, POST</a><br>
      <a href="https://www.baeldung.com/java-9-http-client" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300">article</span>New Java HttpClient</a><br>
     <a href="https://www.twilio.com/en-us/blog/5-ways-to-make-http-requests-in-java" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300">article</span>5 ways to make HTTP requests in Java</a><br>
      <a href="https://mkyong.com/java8/java-8-stream-read-a-file-line-by-line/" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300">article</span>Read a file line by line in Java</a><br>
      <a href="https://howtodoinjava.com/java/io/java-read-file-to-string-examples/" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300">article</span>Various ways to read a file to String in Java</a>
      </ul>
      </div>`,
      "orange",
    ),

    "Getting Deeper": new Data("", "", "yellow", [
      "Memory Management",
      "Collection Framework",
      "Serialization",
      "Networking & Sockets",
      "Generics & Streams",
      "How JVM works",
      "Garbage Collection",
    ]),
    "Memory Management": new Data(
      "Memory Management",
      `<div class="flex-1">
      <p>In Java, memory management is the process of allocation and de-allocation of objects.</p><br>
      Visit the following resources to learn more:
      <ul class="mt-6 space-y-1">
      <a href="https://www.javatpoint.com/memory-management-in-java" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300">article</span>Memory Management in Java</a><br>
      <a href="https://www.youtube.com/watch?v=fM8yj93X80s" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-purple-300">video</span>Memory Management Tutorial in Java</a>
      </ul>
      </div>`,
      "orange",
    ),
    "Collection Framework": new Data(
      "Collection Framework",
      `<div class="flex-1">
      <p>The Collection in Java is a framework that provides an architecture to store and manipulate the group of objects. Java Collections can achieve all the operations that you perform on a data such as searching, sorting, insertion, manipulation, and deletion.</p><br>
      Visit the following resources to learn more:
      <ul class="mt-6 space-y-1">
      <a href="https://www.javatpoint.com/collections-in-java"  target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300">article</span>Collections in Java</a><br>
      <a href="https://www.tutorialspoint.com/java/java_collections.htm"  target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300">article</span>Java - Collections Framework</a>
      </ul>
      </div>`,
      "orange",
    ),
    Serialization: new Data(
      "Serialization",
      `<div class="flex-1">
       <p> Serialization is the conversion of the state of an object into a byte stream; deserialization does the opposite. Stated differently, serialization is the conversion of a Java object into a static stream (sequence) of bytes, which we can then save to a database or transfer over a network.</p><br>
       Visit the following resources to learn more:
       <ul class="mt-6 space-y-1">
       <li><a href="https://www.javatpoint.com/serialization-in-java" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300">article</span>Serialization and Deserialization in Java</a></li>
       <li><a href="https://www.javatpoint.com/serialization-in-java" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300">article</span>Introduction to Java Serialization</a></li>
       </ul>
       </div>`,
      "orange",
    ),
    "Networking & Sockets": new Data(
      "Networking & Sockets",
      `<div class="flex-1">
      <p> <ul>
      <li>Java Networking is a concept of connecting two or more computing devices together so that we can share resources.</li>
      <li>Java socket programming provides facility to share data between different computing devices.</li>
      <li>A socket is one endpoint of a two-way communication link between two programs running on the network. A socket is bound to a port number so that the TCP layer can identify the application that data is destined to be sent to.</li>
      </ul></p><br>
      Visit the following resources to learn more:
      <ul class="mt-6 space-y-1">
      <li><a href="https://docs.oracle.com/javase/tutorial/networking/sockets/index.html" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300" text-black">article</span>Sockets</a></li>
      <li><a href="https://www.tutorialspoint.com/java/java_networking.htm" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300" text-black">article</span>Java Networking</a></li>
      <li><a href="https://www.tutorialspoint.com/java/java_networking.htm" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-purple-300" text-black">video</span>What is Socket Programming?</a></li>
      <li><a href="https://app.daily.dev/tags/networking?ref=roadmapsh" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-purple-300 text-white">feed</span>Explore top posts about Networking</a></li>

      </ul>
      </div>`,
      "orange",
    ),
    "Generics & Streams": new Data(
      "Generics & Streams",
      `<div class="flex-1">
      <h3>Generics</h3>
        <p>Java Generic methods and generic classes enable programmers to specify, with a single method declaration, a set of related methods, or with a single class declaration, a set of related types, respectively.</p><br>
        Visit the following resources to learn more:
        <ul class="mt-6 space-y-1">
        <li><a href="https://www.tutorialspoint.com/java/java_generics.htm" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300" text-black">article</span>Java - Generics</a></li>
        <li><a href="https://www.javatpoint.com/generics-in-java" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300" text-black">article</span>Generics in Java</a></li>
        <li><a href="https://www.youtube.com/watch?v=XMvznsY02Mk" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-purple-300" text-black">video</span>Generics in Java</a></li>
        </ul>
        <h3>Streams</h3>
        <p>Java provides a new additional package in Java 8 called java.util.stream. This package consists of classes, interfaces and enum to allows functional-style operations on the elements. You can use stream by importing java.util.stream package.</p><br>
        Visit the following resources to learn more:
        <ul class="mt-6 space-y-1">
        <li><a href="https://www.javatpoint.com/java-8-stream" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300" text-black">article</span>Java 8 Stream</a></li>
        <li><a href="https://www.baeldung.com/java-8-streams" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300" text-black">article</span>The Java 8 Stream API Tutorial</a></li>
        <li><a href="https://www.youtube.com/watch?v=VNovNwHr9jY" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-purple-300" text-black">video</span>Streams API Tutorial in Java 8+</a></li>
        <li><a href="https://www.youtube.com/watch?v=t1-YZ6bF-g0" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-purple-300" text-black">video</span>Java 8 Streams Tutorial</a></li>
        </ul>
      </div>`,
      "orange",
    ),
    "How JVM works": new Data(
      "How JVM works",
      `<div class="flex-1">
      <p>The Java Virtual Machine (JVM) is a platform-dependent program that executes platform-independent Java bytecode, embodying the “Write once, run everywhere” principle. As a crucial component of the Java Runtime Environment (JRE), the JVM is responsible for initiating Java programs by calling their main method. While designed primarily for Java, the JVM’s ability to run any language compiled to Java bytecode has led to its adoption by other languages like Kotlin, Scala, and Groovy. Multiple JVM implementations exist, with Oracle’s HotSpot being the standard and GraalVM emerging as a high-performance alternative, each offering unique features and optimizations.</p><br>
      Visit the following resources to learn more:
      <ul class="mt-6 space-y-1">
      <li><a href="https://www.infoworld.com/article/2269370/what-is-the-jvm-introducing-the-java-virtual-machine.html" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300" text-black">article</span>Introducing the Java Virtual Machine</a></li>
      <li><a href="https://www.whizlabs.com/blog/jvm-languages/" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300" text-black">article</span>JVM languages</a></li>
      <li><a href="https://www.graalvm.org/" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300" text-black">article</span>GraalVM</a></li>
      <li><a href="https://www.graalvm.org/" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-purple-300" text-black">video</span>How JVM works?</a></li>
      <li><a href="https://app.daily.dev/tags/jvm?ref=roadmapsh" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-purple-300 text-white">feed</span>Explore top posts about JVM</a></li>
      </ul>
      </div>`,
      "orange",
    ),
    "Garbage Collection": new Data(
      "Garbage Collection",
      `<div class="flex-1">
      <p>Java garbage collection is the process by which Java programs perform automatic memory management. Java programs compile to bytecode that can be run on a Java Virtual Machine, or JVM for short. When Java programs run on the JVM, objects are created on the heap, which is a portion of memory dedicated to the program</p><br>
      Visit the following resources to learn more:
      <ul class="mt-6 space-y-1">
      <li><a href="https://www.infoworld.com/article/2269370/what-is-the-jvm-introducing-the-java-virtual-machine.html" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300" text-black">article</span>Introducing the Java Virtual Machine</a></li>
      <li><a href="https://www.infoworld.com/article/2269370/what-is-the-jvm-introducing-the-java-virtual-machine.html" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300" text-black">article</span>Introducing the Java Virtual Machine</a></li>
      <li><a href="https://www.graalvm.org/" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-purple-300" text-black">video</span>How JVM works?</a></li>

      </ul>
      </div>`,
      "orange",
    ),
    "Build Tools": new Data(
      "Build Tools",
      `<div class="flex-1">
      <p>A build tool is a program or command-line utility that automates the process of compiling, assembling, and deploying software.</p>
      <p>Build tools are not only limited to compiling code; they can also help with package management, dependency handling, and continuous integration systems.</p>
      </div>`,
      "yellow",
      ["Maven"],
    ),
    Maven: new Data(
      "Maven",
      `<div class="flex-1">
      <p>Maven is an open-source build tool, used primarily for Java projects.</p><br>
      Visit the following resources to learn more:
      <ul class="mt-6 space-y-1">
      <li><a href="https://maven.apache.org/guides/getting-started/" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300" text-black">article</span>Getting started</a></li>
      <li><a href="https://www.baeldung.com/spring-with-maven" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-yellow-300" text-black">article</span>Building Spring Projects with Maven</a></li>
      <li><a href="https://app.daily.dev/tags/maven?ref=roadmapsh" target="_blank" class="group font-medium text-gray-800 underline underline-offset-1 hover:text-black"><span class="mr-2 inline-block rounded px-1.5 py-0.5 text-xs uppercase no-underline bg-purple-300 text-white">feed</span>Explore top posts about Maven</a></li>
      </ul>
      </div>`,
      "orange",
    ),
  };
}
