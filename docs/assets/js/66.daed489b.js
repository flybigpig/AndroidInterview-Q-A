(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{342:function(t,v,_){"use strict";_.r(v);var s=_(14),n=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h4",{attrs:{id:"进程和线程的区别-猎豹-美团"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程的区别-猎豹-美团"}},[t._v("#")]),t._v(" 进程和线程的区别-猎豹-美团")]),t._v(" "),v("p",[t._v("简而言之,一个程序至少有一个进程,一个进程至少有一个线程。")]),t._v(" "),v("p",[t._v("线程的划分尺度小于进程，使得多线程程序的并发性高。")]),t._v(" "),v("p",[t._v("另外，进程在执行过程中拥有独立的内存单元，而多个线程共享内存，从而极大地提高了程序的运行效率。")]),t._v(" "),v("p",[t._v("线程在执行过程中与进程还是有区别的。每个独立的线程有一个程序运行的入口、顺序执行序列和程序的出口。但是线程不能够独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制。")]),t._v(" "),v("p",[t._v("从逻辑角度来看，多线程的意义在于一个应用程序中，有多个执行部分可以同时执行。但操作系统并没有将多个线程看做多个独立的应用，来实现进程的调度和管理以及资源分配。这就是进程和线程的重要区别。")]),t._v(" "),v("p",[t._v("进程是具有一定独立功能的程序关于某个数据集合上的一次运行活动,进程是系统进行资源分配和调度的一个独立单位.")]),t._v(" "),v("p",[t._v("线程是进程的一个实体,是CPU调度和分派的基本单位,它是比进程更小的能独立运行的基本单位.线程自己基本上不拥有系统资源,只拥有一点在运行中必不可少的资源(如程序计数器,一组寄存器和栈),但是它可与同属一个进程的其他的线程共享进程所拥有的全部资源.")]),t._v(" "),v("p",[t._v("一个线程可以创建和撤销另一个线程;同一个进程中的多个线程之间可以并发执行.")]),t._v(" "),v("p",[t._v("进程和线程的主要差别在于它们是不同的操作系统资源管理方式。进程有独立的地址空间，一个进程崩溃后，在保护模式下不会对其它进程产生影响，而线程只是一个进程中的不同执行路径。线程有自己的堆栈和局部变量，但线程之间没有单独的地址空间，一个线程死掉就等于整个进程死掉，所以多进程的程序要比多线程的程序健壮，但在进程切换时，耗费资源较大，效率要差一些。但对于一些要求同时进行并且又要共享某些变量的并发操作，只能用线程，不能用进程。如果有兴趣深入的话，我建议你们看看《现代操作系统》或者《操作系统的设计与实现》。对就个问题说得比较清楚。")])])}),[],!1,null,null,null);v.default=n.exports}}]);