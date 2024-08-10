import { Injectable } from "@angular/core";

export class Data {
  heading: string;
  content: string;
  status: Status;

  constructor(heading: string, content: string) {
    this.heading = heading;
    this.content = content;
    this.status = stringToStatus(
      localStorage.getItem(heading) || Status.Pending,
    );
  }
}
export enum Status {
  Pending = "pending",
  Done = "done",
  InProgress = "in progress",
  Skip = "skip",
}
export function stringToStatus(statusString: string): Status {
  switch (statusString.toLowerCase()) {
    case "pending":
      return Status.Pending;
    case "done":
      return Status.Done;
    case "in progress":
      return Status.InProgress;
    case "skip":
      return Status.Skip;
    default:
      return Status.Pending;
  }
}

@Injectable({
  providedIn: "root",
})
export class DataService {
  private data: { [key: string]: Data } = {
    "Learn the Fundamentals": new Data(
      "Java Fundamentals",
      `<div class="flex-1">
      <p>Java is a programming language and computing platform first released by Sun Microsystems in 1995.
        Java is a general-purpose, class-based, object-oriented programming language designed for having lesser implementation dependencies.
        It is a computing platform for application development.
         Java is fast, secure, and reliable.
        Therefore, it is widely used for developing Java applications in laptops, data centers, game consoles, scientific supercomputers, cell phones, etc.
         Learn about the fundamentals of Java such as basic syntax, data types, variables, conditionals, functions, data structures, packages, etc.</p></div>`,
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
    ),
  };

  constructor() {}

  getData(key: string): Data {
    return this.data[key];
  }
}
