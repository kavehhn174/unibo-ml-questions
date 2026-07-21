# **Past Exams Compilation**

This document contains the consolidated content from the following files:

1. **Simulation 2022 Solution**  
2. **Written Exam 2022-02-07**  
3. **Written Test 2020-2025 Solution** (Comprehensive Guide)

# **Part 1: Simulation 2022 Solution**

**1\. Question:** Which of the following is NOT a property of a metric distance function?

**Answer:** BOUNDEDNESS

**2\. Question:** Given the two binary vectors below, which is their similarity according to the Simple Matching Coefficient?

* 1000101101  
* 1011101010

**Answer:** 0.5

**3\. Question:** Given the two binary vectors below, which is their similarity according to the Jaccard Coefficient?

* 1000101101  
* 1011101010

**Answer:** 0.375

**4\. Question:** What is the single linkage?

**Answer:** A method to compute the distance between two sets of items, it can be used in hierarchical clustering

**5\. Question:** Given the definitions below:

* $TP=$ True Positives  
* $TN=$ True Negatives  
* $FP=$ False Positives  
* $FN=$ False Negatives

Which of the formulas below computes the recall (or hit rate or sensitivity) of a binary classifier?

**Answer:** $TP/(TP+FN)$

**6\. Question:** Given the definitions below:

* $TP=$ True Positives  
* $TN=$ True Negatives  
* $FP=$ False Positives  
* $FN=$ False Negatives

Which of the formulas below computes the accuracy of a binary classifier?

**Answer:** $(TP+TN)/(TP+FP+TN+FN)$

**7\. Question:** Given the definitions below:

* $TP=$ True Positives  
* $TN=$ True Negatives  
* $FP=$ False Positives  
* $FN=$ False Negatives

Which of the formulas below computes the precision (or positive predictive value) of a binary classifier?

**Answer:** $TP/(TP+FP)$

**8\. Question:** Given the definitions below:

* $TP=$ True Positives  
* $TN=$ True Negatives  
* $FP=$ False Positives  
* $FN=$ False Negatives

Which of the formulas below computes the specificity of a binary classifier?

**Answer:** $TN/(TN+FP)$

**9\. Question:** Why do we prune a decision tree?

**Answer:** To eliminate parts of the tree where the decisions could be influenced by random effects

**10\. Question:** A Decision Tree is...

**Answer:** A tree-structured plan of tests on single attributes to forecast the target

**11\. Question:** When training a neural network, what is the learning rate?

**Answer:** A multiplying factor of the correction to be applied to the connection weights

**12\. Question:** Which of the following is a strength of the clustering algorithm DBSCAN?

**Answer:**

* Ability to find cluster with **concavities**  
* Ability to **separate outliers** from **regular data**

**13\. Question:** Which of the following is not a strength point of DBSCAN with respect to k-means?

**Answer:** The efficiency even in large datasets

**14\. Question:** Which of the following characteristic of data can reduce the effectiveness of K-Means?

**Answer:** Presence of outliers

**15\. Question:** After fitting DBSCAN with the default parameter values the result are: 0 clusters, 100% of noise points. Which will be your next trial?

**Answer:**

* Reduce the minimum number of object in the neighborhood  
* Increase the radius of the neighborhood

**16\. Question:** Which of the following statements regarding the discovery of association rules is true (one or more)?

**Answer:**

* The confidence of a rule can be computed starting from the supports of itemsets  
* The support of an itemset is anti-monotonic with respect to the composition of the itemset

**17\. Question:** Consider the transactional dataset below

* 1: A,B,C  
* 2: A,B,D  
* 3: B,D,E  
* 4: C,D  
* 5: A,C,D,E

Which is the confidence of the rule $A,C \\Rightarrow B$?

**Answer:** $50\\%$

18\. Question: Consider the transactional dataset below (Same as above)  
Which is the support of the rule $A,C \\Rightarrow B$?  
**Answer:** $20\\%$

19\. Question: Consider the transactional dataset below (Same as above)  
Which is the confidence of the rule $B \\Rightarrow E$?  
**Answer:** $33\\%$

**20\. Question:** When is polynomial regression appropriate?

**Answer:** When the relationship between the predicting variable and the target cannot be approximated as linear

**21\. Question:** Which is the purpose of discretization/discretisation?

**Answer:** Reduce the number of distinct values in an attribute, in order to put in evidence possible patterns and regularities

**22\. Question:** In which part of the CRISP methodology we perform the test design activity?

**Answer:** Modelling

**23\. Question:** Which is the main reason for the standardization of numeric attributes?

**Answer:** Map all the numeric attributes to a new range such that the mean is zero and the variance is one

**24\. Question:** What is Gini Index?

**Answer:** An impurity measure of a dataset alternative to the Information Gain and to the Misclassification Index

**25\. Question:** Which of the following measure can be used as an alternative to the Information Gain?

**Answer:** Gini Index

**26\. Question:** In a decision tree, the number of objects in a node...

**Answer:** is smaller than the number of objects in its ancestor

**27\. Question:** Which of the following is a base hypothesis for a bayesian classifier?

**Answer:** The attributes must be statistically independent inside each class

**28\. Question:** With reference to the total sum of squared errors and separation of a clustering scheme, which of the statements below is true?

**Answer:** They are strictly correlated, if, changing the clustering scheme, one increases, then the other decreases

**29\. Question:** Which of the statements below is true (one or more)?

**Answer:**

* Sometimes k-means stops to a configuration which does not give the minimum distortion for the chosen value of the number of clusters  
* K-means is quite efficient even for large datasets  
* K-means is very sensitive to the initial assignment of the centers

**30\. Question:** Which of the statements below is true (one or more)?

**Answer:**

* Sometimes DBSCAN stops to a configuration which does not include any cluster  
* DBSCAN can give good performance when clusters have concavities  
* Increasing the radius of the neighborhood can decrease the number of noise points

**31\. Question:** What is the meaning of the statement: "the support is anti-monotone"?

**Answer:** The support of an itemset never exceeds the support if its subsets

**32\. Question:** What is the coefficient of determination $R^2$?

**Answer:** Provide an index of goodness for a linear regression model

**33\. Question:** What does K-means try to minimize/minimise?

**Answer:** The distortion, that is the sum of the squared **distances** of each point with respect to its centroid

**34\. Question:** Which of the activities below is part of "Business Understanding" in the CRISP methodology?

**Answer:** Which are the resources available (manpower, hardware, software,...)

**35\. Question:** Which of the following statements is true (one or more)?

**Answer:**

* Outliers can be due to noise  
* The noise can generate outliers

**36\. Question:** In which mining activity the Information Gain can be useful?

**Answer:** Classification

**37\. Question:** What is the cross validation?

**Answer:** A technique to obtain a good estimation of the performance of a classifier when it will be used with data different from the training set

**38\. Question:** Which of the following preprocessing activities is useful to build a Naive Bayes classifier if the independence hypothesis is violated?

**Answer:** Feature selection

**39\. Question:** Which is the main reason for the MinMax scaling (also known as "rescaling") of attributes?

**Answer:** Map all the numeric attributes to the same range, in order to prevent the attributes with higher range from having prevalent influence

**40\. Question:** Which is the main reason for the normalization (also known as "rescaling") of numeric attributes?

**Answer:** Map all the numeric attributes to the same range, in order to prevent the attributes (without altering the distribution) with higher range from having prevalent influence

**41\. Question:** Which of the following is not an objective of feature selection?

**Answer:** Select the features with higher range, which have more influence on the computations

**42\. Question:** For each type of data choose the best suited distance function:

**Answer:**

* Vector space with real values: Euclidean Distance  
* Boolean data: Jaccard coefficient  
* Vectors of terms representing documents: Cosine distance  
* High dimensional spaces: Manhattan distance

**43\. Question:** When developing a classifier, which of the following is a symptom of overfitting?

**Answer:** The error rate in the test set is much greater than the error rate in the training set

**44\. Question:** In a decision tree, an attribute which is used only in nodes near the leaves...

**Answer:** gives little insight with respect to the target

**45\. Question:** Which of the statements below about Hierarchical Agglomerative Clustering is true?

**Answer:** Requires the definition of distance between set of objects

**46\. Question:** Match the rule evaluation formulas with their names:

**Answer:**

* $\\frac{sup(A \\Rightarrow C)}{sup(A)}$: Confidence  
* $\\frac{sup(A \\Rightarrow C)}{sup(C)}$: Lift  
* $sup(A \\cup C) \- sup(A)sup(C)$: Leverage  
* $\\frac{1 \- sup(C)}{1 \- sup(A \\Rightarrow C)}$: Conviction

**47\. Question:** In data preprocessing, which of the following is not an objective of the aggregation of attributes?

**Answer:** Obtain a more detailed description of data

**48\. Question:** In data preprocessing, which of the following is an objective of the aggregation of attributes?

**Answer:**

* Obtain a less detailed scale  
* Reduce the variability of data  
* Reduce the number of attributes or distinct values

**49\. Question:** Which of the statements below best describes the strategy of Apriori in finding the frequent itemsets?

**Answer:** Evaluation of the support of the itemsets in an order such that uninteresting parts of the search space are pruned as soon as possible

**50\. Question:** In order to reduce the dimensionality of a dataset, which is the advantage of Multi Dimensional Scaling (MDS), with respect to Principal Component Analysis (PCA)?

**Answer:** MDS can be used also with categorical data, provided that the matrix of the distance is available, while PCA is limited to vector spaces

**51\. Question:** Which is different from the others?

**Answer:** Decision tree

$$only supervised method \- between K-means, Expectation Maximization, Apriori$$  
**52\. Question:** Which is different from the others?

**Answer:** Decision tree

$$not a clustering method \- between K-means, Expectation Maximization, Dbscan$$  
**53\. Question:** Which is different from the others?

**Answer:** Dbscan

$$not a classification method \- between SVM, Neural Network, Decision Tree$$  
**54\. Question:** Which is different from the others?

**Answer:** Silhouette Index

$$not a index for the evaluation of purity \- between Misclassification Error, Gini Index, Entropy$$  
**55\. Question:** How does pruning work when generating frequent itemsets?

**Answer:** If an itemset is not frequent, then none of its superset can be frequent, therefore the frequencies of the supersets are not evaluated.

**56\. Question:** What measure is maximized by the Expectation Maximization algorithm for clustering?

**Answer:** The likelihood of a class label, given the values of the attributes of the example

**57\. Question:** The information gain is used to ...

**Answer:** select the attribute which maximizes, for a given **training set**, the ability to predict the class value

**58\. Question:** In data preparation which is the effect of normalization?

**Answer:** Map all the numeric attributes to the same range, without altering the distribution, in order to avoid that attributes with large ranges have more influence

**59\. Question:** Which of the following clustering methods is not based on distances between objects?

**Answer:** Expectation Maximization

**60\. Question:** In a dataset with D attributes, how many subsets of attributes should be considered for feature selection according to an exhaustive search?

**Answer:** $O(2^{D})$

**61\. Question:** Which is the effect of the course of dimensionality?

**Answer:** When the number of dimensions **increases** the **Euclidean distance** becomes less effective to **discriminate** between points in the space

**62\. Question:** Which is the main purpose of **smoothing** in Bayesian classification?

**Answer:** Classifying an **object** containing **attribute values** which are **missing** from some classes in the training set

**63\. Question:** Which of the following characteristic of data can reduce the effectiveness of DBSCAN?

**Answer:** Presence of **clusters** with **different densities**

**64\. Question:** Which of the following types of data allows the use of the Euclidean distance?

**Answer:** Point in a vector space

**65\. Question:** Which is the effect of the curse of dimensionality?

**Answer:** When the number of dimensions increases the Euclidean distance becomes less effective to discriminate between points in the space

**66\. Question:** What are the hyperparameters of a Neural Network (possibly non exhaustive)?

**Answer:** Hidden layer structure, learning rate, activation function, number of epochs

**67\. Question:** How can we measure the quality of a trained regression model?

**Answer:** With a formula elaborating the difference between the forecast values and the true ones

**68\. Question:** What is the difference between classification and regression?

**Answer:** Classification has a categorical target, while regression has a numeric target

**69\. Question:** In feature selection, what is the Principal Component Analysis?

**Answer:** A mathematical technique used to **transform** a set of numeric attributes into a **smaller** set of numeric attributes which capture most of the variability in data

**70\. Question:** In a Neural Network, what is the backpropagation?

**Answer:** The technique used to **adjust** the **connection weights** according to the **difference** between the **desire output** and the **output generated** the network

# **Part 2: Written Exam 2022-02-07**

Question 1  
In data preprocessing, which of the following is not an objective of the aggregation of attributes?

* a. Obtain a more detailed description of data  
* b. Reduce the variability of data  
* c. Reduce the number of attributes or objects  
* d. Obtain a less detailed scale

Correct Answer: a. Obtain a more detailed description of data  
(Note: As a matter of fact, aggregation moves towards the opposite direction)  
Question 2  
Given the two binary vectors below, which is their similarity according to the Jaccard Coefficient?  
1000101101  
1011101010

* a. 0.1  
* b. 0.375  
* c. 0.5  
* d. 0.2

Correct Answer: b. 0.375  
(Note: It is the number of matching 1 divided by the number of matching 1 \+ the number of non-matching)  
Question 3  
Which of the following statements is true?

* a. The data which are similar to the majority are never noise  
* b. The noise can generate outliers  
* c. Outliers can be due to noise  
* d. The noise always generate outliers

**Correct Answers:**

* Outliers can be due to noise  
* The noise can generate outliers

Question 4  
Given the definitions below:

* $TP=$ True Positives  
* $TN=$ True Negatives  
* $FP=$ False Positives  
* $FN=$ False Negatives

Which of the formulas below computes the accuracy of a binary classifier?

* a. $TP/(TP+FP)$  
* b. $(TP+TN)/(TP+FP+TN+FN)$  
* c. $TN/(TN+FP)$  
* d. $TP/(TP+FN)$

**Correct Answer:** b. $(TP+TN)/(TP+FP+TN+FN)$

Question 5  
What is the cross validation?

* a. A technique to obtain a good estimation of the performance of a classifier with the training set  
* b. A technique to obtain a good estimation of the performance of a classifier when it will be used with data different from the training set  
* c. A technique to improve the speed of a classifier  
* d. A technique to improve the quality of a classifier

**Correct Answer:** b. A technique to obtain a good estimation of the performance of a classifier when it will be used with data different from the training set

Question 6  
In a decision tree, the number of objects in a node...

* a. ...is smaller than or equal to the number of objects in its ancestor  
* b. ...is smaller than the number of objects in its ancestor  
* c. ...is bigger than the number of objects in its ancestor  
* d. ...is not related to the number of objects in its ancestor

**Correct Answer:** b. ...is smaller than the number of objects in its ancestor

Question 7  
When training a neural network, what is the learning rate?

* a. A multiplying factor of the correction to be applied to the connection weights  
* b. The slope of the activation function in a specific node  
* c. The ratio between the size of the hidden layer and the input layer of the network  
* d. The speed of convergence to a stable solution during the learning process

**Correct Answer:** a. A multiplying factor of the correction to be applied to the connection weights

Question 8  
Which of the statements below about Hierarchical Agglomerative Clustering is true?

* a. Requires the definition of distance between sets of objects  
* b. Is based on a well founded statistical model  
* c. Requires the definition of Inertia of clusters  
* d. Is very efficient, also with large datasets

**Correct Answer:** a. Requires the definition of distance between sets of objects

Question 9  
Which of the following is not a strength point of Dbscan with respect to K-means?

* a. The effectiveness, even in presence of noise  
* b. The efficiency even in large datasets  
* c. The robustness with respect to outliers  
* d. The effectiveness even if there are clusters with non-convex shape

Correct Answer: b. The efficiency even in large datasets  
(Note: As a matter of fact, this is rather a weakness point of Dbscan with respect to K-means)  
Question 10  
Which of the statements below is true? (One or more)

* a. DBSCAN always stops to a configuration which gives the optimal number of clusters  
* b. Increasing the radius of the neighbourhood can decrease the number of noise points  
* c. DBSCAN can give good performance when clusters have concavities  
* d. Sometimes DBSCAN stops to a configuration which does not include any cluster

**Correct Answers:**

* Sometimes DBSCAN stops to a configuration which does not include any cluster  
* DBSCAN can give good performance when clusters have concavities  
* Increasing the radius of the neighbourhood can decrease the number of noise points

Question 11  
Which of the statements below best describes the strategy of Apriori in finding the frequent itemsets?

* a. Evaluation of the support of the itemsets in an order such that uninteresting parts of the search space are considered only at the end of the execution  
* b. Evaluation of the confidence of the itemsets in an order such that uninteresting parts of the search space are pruned as soon as possible  
* c. Evaluation of the support of the itemsets in an order such that uninteresting parts of the search space are pruned as soon as possible  
* d. Evaluation of the support of the itemsets in an order such that the interesting parts of the search space are pruned as soon as possible

**Correct Answer:** c. Evaluation of the support of the itemsets in an order such that uninteresting parts of the search space are pruned as soon as possible

Question 12  
Consider the transactional dataset below

* 1: A,B,C  
* 2: A,B,D  
* 3: B,D,E  
* 4: C,D  
* 5: A,C,D,E

Which is the support of the rule $A,C \\Rightarrow B$?

* a. 100%  
* b. 40%  
* c. 20%  
* d. 50%

**Correct Answer:** c. 20%

Question 13  
In order to reduce the dimensionality of a dataset, which is the advantage of Multi Dimensional Scaling (MDS), with respect to Principal Component Analysis (PCA)?

* a. MDS can be used also with categorical data, provided that the matrix of the distance is available, while PCA is limited to vector spaces  
* b. MDS requires less computational power  
* c. MDS can be used with categorical data after a transformation in a vector space  
* d. MDS can work on any kind of data, while PCA is limited to categorical data

**Correct Answer:** a. MDS can be used also with categorical data, provided that the matrix of the distance is available, while PCA is limited to vector spaces

Question 14  
When is polynomial regression appropriate?

* a. When there is more than one predicting attribute  
* b. When the relationship between the predicting variable and the target cannot be approximated as linear  
* c. When it is necessary to project the data into a higher dimensional space  
* d. When the target values are not linearly separable

**Correct Answer:** b. When the relationship between the predicting variable and the target cannot be approximated as linear

Question 15  
Which is different from the others?

* a. Decision Tree  
* b. K-means  
* c. Expectation Maximisation  
* d. Apriori

Correct Answer: a. Decision Tree  
(Note: This is the only supervised method)

# **Part 3: Written Test 2020-25 Solution (Comprehensive Guide)**

*Prepared by Tauan Torres Mendes*

## **Metric Distance Functions**

**1\. Question:** Which of the following is NOT a property of a metric distance function? BOUNDEDNESS

Answer:  
Boundedness is not a property of a metric distance function. The fundamental properties of a metric distance function are:

1. Non-negativity: $d(x,y)\\ge0$ $\\forall x, y$  
2. Identity of indiscernibles: $d(x,y)=0\\iff x=y$  
3. Symmetry: $d(x,y)=d(y,x)$  
4. Triangle inequality: $d(x,z)\\le d(x,y)+d(y,z)$

Boundedness is not required for a function to be a metric.

Theory Recap:  
A metric distance function must satisfy four properties:

* Non-negativity  
* Identity of indiscernibles  
* Symmetry  
* Triangle inequality

Boundedness is not a requirement, as metrics are not constrained to finite values.

## **Similarity Measures**

**2\. Question:** Given the two binary vectors below, which is their similarity according to the Simple Matching Coefficient? 0.5

* Vector 1: 1000101101  
* Vector 2: 1011101010

Answer:  
The similarity according to the Simple Matching Coefficient (SMC) is:  
$SMC=\\frac{Number\~of\~matches}{Total\~elements}=\\frac{5}{10}=0.5$  
Theory Recap:  
The Simple Matching Coefficient (SMC) is a measure used to calculate the similarity between two binary vectors. It considers both matches in 1s and 0s equally important. The formula is:  
$SMC \= \\frac{a+d}{a+b+c+d}$  
Where:

* a: Number of positions where both vectors have 1 (1,1 matches).  
* d: Number of positions where both vectors have 0 (0,0 matches).  
* b: Number of positions where the first vector has 1 and the second has 0 (1,0 mismatches).  
* c: Number of positions where the first vector has 0 and the second has 1 (0,1 mismatches).

**Key Concepts:**

* **Binary Vectors:** Represent objects in binary form (0s and 1s).  
* **Matching Measures:** SMC equally considers matches of 1s and 0s, unlike other measures like the Jaccard index, which focuses on 1s.  
* **Applications:** Used in comparing binary data sets, such as presence/absence matrices in machine learning.

**3\. Question:** Given the two binary vectors below, which is their similarity according to the Jaccard Coefficient? 0.375

* Vector 1: 1000101101  
* Vector 2: 1011101010

Answer:  
The similarity according to the Jaccard Coefficient (JC) is:  
$JC=\\frac{Number\~of\~matches\~in\~1's}{Total\~number\~of\~positions\~with\~at\~least\~one\~1}=\\frac{3}{8}=0.375$  
Theory Recap:  
The Jaccard Coefficient (JC) measures the similarity between two binary vectors by focusing only on the positions where at least one of the vectors has a 1\. It is defined as:  
$JC=\\frac{a}{a+b+c}$  
Where:

* a: Number of positions where both vectors have 1 (1,1 matches).  
* b: Number of positions where the first vector has 1 and the second has 0 (1,0 mismatches).  
* c: Number of positions where the first vector has 0 and the second has 1 (0,1 mismatches).

**Key Differences:**

* JC focuses only on 1's and ignores 0,0 matches, making it more suitable for sparse binary data.  
* Applications include text mining and clustering.

## **Clustering Methods**

**4\. Question:** What is the single linkage? A method to compute the distance between two sets of items; it can be used in hierarchical clustering.

Answer:  
Single linkage is a method used to compute the distance between two clusters by taking the smallest distance between any two points in the two clusters. It is commonly used in hierarchical clustering.  
Theory Recap:  
Single Linkage is a clustering technique used in hierarchical clustering to measure the similarity (or distance) between two clusters. The method considers the closest pair of points between the clusters. Formally:  
$d(A, B) \= \\min\_{a \\in A, b \\in B} d(a, b)$

* Applications include exploratory data analysis.

## **Evaluation Metrics**

**5\. Question:** Given the definitions below:

* $TP=$ True Positives  
* $TN=$ True Negatives  
* $FP=$ False Positives  
* $FN=$ False Negatives

Which of the formulas below computes the recall (or hit rate or sensitivity) of a binary classifier? $TP/(TP+FN)$

Answer:  
The formula for recall (or sensitivity or hit rate) is:  
$Recall \= \\frac{TP}{TP \+ FN}$  
Where:

* TP: The number of true positives (correctly predicted positive cases).  
* FN: The number of false negatives (positive cases that were incorrectly predicted as negative).

Theory Recap:  
Recall, also known as sensitivity or hit rate, is a measure of a model's ability to identify all relevant instances in a dataset. It focuses on the proportion of true positive predictions relative to the total actual positives.  
The formula is:  
$Recall \= \\frac{TP}{TP \+ FN}$  
**Key Points:**

* **High Recall:** Indicates that the model correctly identifies most of the positive cases.  
* **Low Recall:** Means that many positive cases are missed (high FN).

Applications of Recall:  
Recall is crucial in scenarios where missing positive cases has a high cost, such as:

* Disease detection.  
* Fraud detection.

Relation to Other Metrics:  
Recall is often analyzed alongside precision to evaluate a model's overall performance. Together, they form the basis for other metrics such as the F1-Score.  
**6\. Question:** Given the definitions below:

* $TP=$ True Positives  
* $TN=$ True Negatives  
* $FP=$ False Positives  
* $FN=$ False Negatives

Which of the formulas below computes the accuracy of a binary classifier? $(TP+TN)/(TP+FP+TN+FN)$

Answer:  
The formula for accuracy is:  
$Accuracy=\\frac{TP+TN}{TP+FP+TN+FN}$  
Where:

* TP: Number of true positives.  
* TN: Number of true negatives.  
* FP: Number of false positives.  
* FN: Number of false negatives.

Theory Recap:  
Accuracy is a fundamental metric used to evaluate the performance of a classification model. It measures the proportion of correctly predicted cases (both positives and negatives) out of the total number of cases.  
**Key Points:**

* **High Accuracy:** Indicates that the model is correctly classifying most cases.  
* **Limitations:** Accuracy can be misleading when dealing with imbalanced datasets.

Applications of Accuracy:  
Accuracy is a general-purpose metric, often used when the dataset is balanced. Less useful in cases like fraud detection or rare disease diagnosis.  
Relation to Other Metrics:  
Accuracy is often analyzed alongside precision, recall, and the F1-score.  
**7\. Question:** Given the definitions below (TP, TN, FP, FN), which of the formulas below computes the precision (or positive predictive value) of a binary classifier? $TP/(TP+FP)$

Answer:  
The formula for precision is:  
$Precision \= \\frac{TP}{TP+FP}$  
Where:

* TP: Number of true positives.  
* FP: Number of false positives.

Theory Recap:  
Precision, also known as the positive predictive value, is a measure of the accuracy of positive predictions. It evaluates how many of the predicted positive cases are actually positive.  
**Key Points:**

* **High Precision:** Indicates that most of the predicted positives are correct.  
* **Low Precision:** Means that there are many false positives.

Applications of Precision:  
Precision is crucial in scenarios where false positives are costly, such as email spam filters.  
Relation to Other Metrics:  
Precision is often analyzed alongside recall. Together, they provide a balance through the F1-score.  
**8\. Question:** Given the definitions below (TP, TN, FP, FN), which of the formulas below computes the specificity of a binary classifier? $TN/(TN+FP)$

Answer:  
The formula for specificity is:  
$Specificity \= \\frac{TN}{TN \+ FP}$  
Where:

* TN: Number of true negatives.  
* FP: Number of false positives.

Theory Recap:  
Specificity, also known as the true negative rate, measures a model's ability to correctly identify negative cases.  
**Key Points:**

* **High Specificity:** Indicates that the model correctly identifies most of the negative cases.  
* **Low Specificity:** Means that many negative cases are incorrectly classified as positive (high FP).

Applications of Specificity:  
Specificity is crucial in scenarios where avoiding false positives is important, such as diagnostic tests where a false positive could lead to unnecessary treatment.

## **Extra Theory Recap**

**Definitions of TP, FP, FN, TN**

* **True Positive (TP):** Cases where the model correctly predicts "Positive."  
* **False Positive (FP):** Cases where the model predicts "Positive," but it is actually "Negative." (Type I Error)  
* **False Negative (FN):** Cases where the model predicts "Negative," but it is actually "Positive." (Type II Error)  
* **True Negative (TN):** Cases where the model correctly predicts "Negative."

Metrics Explanation  
Example Data: We test 10 people. 5 have the disease, 5 do not.  
Model predictions:

* TP=3  
* FP=2  
* FN=2  
* TN=3

Accuracy:  
$Accuracy \= \\frac{3+3}{10} \= 0.6$ (60%)  
Error Rate:  
$Error Rate \= 1 \- 0.6 \= 0.4$ (40%)  
Precision:  
$Precision \= \\frac{3}{3+2} \= 0.6$ (60%)  
Recall (Sensitivity):  
$Recall \= \\frac{3}{3+2} \= 0.6$ (60%)  
Specificity:  
$Specificity \= \\frac{3}{3+2} \= 0.6$ (60%)  
F1 Score:  
$F1 \= 2 \\cdot \\frac{Precision \\cdot Recall}{Precision \+ Recall} \= 0.6$  
**Key Takeaways:**

* **Precision:** How much you can trust the model when it predicts positive.  
* **Recall:** How good the model is at finding all the positives.  
* **Specificity:** How good the model is at finding all the negatives.  
* **F1 Score:** Overall balance between precision and recall.

## **Clustering**

**9\. Question:** Why do we prune a decision tree? To eliminate parts of the tree where the decisions could be influenced by random effects.

Answer:  
Pruning is used to remove sections of a decision tree that may be overfitting the training data. It helps generalize the model to perform better on unseen data.  
Theory Recap:  
Pruning reduces the complexity of a decision tree by eliminating nodes that provide little predictive power and reducing the risk of overfitting.  
**10\. Question:** A Decision Tree is... A tree-structured plan of tests on single attributes to forecast the target.

Answer:  
A decision tree is a predictive modeling technique that uses a tree-like structure to make decisions based on conditions or features of the data.  
Theory Recap:  
Decision Trees split data into subsets based on the value of input features and predict outcomes using a series of decision rules.  
**11\. Question:** When training a neural network, what is the learning rate? A multiplying factor of the correction to be applied to the connection weights.

Answer:  
The learning rate controls how much the model's weights are adjusted during training.  
Theory Recap:  
Learning Rate:

* Small learning rates ensure convergence but may be slow.  
* Large learning rates speed up training but risk overshooting the optimal point.

**12\. Question:** Which of the following is a strength of the clustering algorithm DBSCAN?

* Ability to find clusters with concavities.  
* Ability to separate outliers from regular data.

Answer:  
DBSCAN is robust in finding clusters of arbitrary shapes and identifying outliers.  
Theory Recap:  
DBSCAN (Density-Based Spatial Clustering of Applications with Noise) identifies dense regions as clusters and handles noise effectively. Parameters: $\\epsilon$ (neighborhood radius) and minPts.  
**13\. Question:** Which of the following is not a strength point of DBSCAN with respect to k-means? The efficiency even in large datasets.

Answer:  
DBSCAN is less efficient on large datasets because it computes distances between all points.  
Theory Recap:  
DBSCAN vs K-Means:

* Strengths of DBSCAN: Handles arbitrary-shaped clusters and outliers.  
* Weakness: Higher computational complexity compared to k-means.  
* Strengths of K-Means: Efficient on large datasets and easy to implement.

**14\. Question:** Which of the following characteristics of data can reduce the effectiveness of K-Means? Presence of outliers.

Answer:  
K-Means is sensitive to outliers because they can significantly distort the cluster centroids.  
Theory Recap:  
Outliers can pull centroids away from actual cluster centers. Preprocessing techniques can mitigate this.  
**15\. Question:** After fitting DBSCAN with the default parameter values the result are: 0 clusters, 100% of noise points. Which will be your next trial?

* Reduce the minimum number of objects in the neighborhood.  
* Increase the radius of the neighborhood.

Answer:  
Adjust the DBSCAN parameters (minPts and $\\epsilon$) to identify clusters better.  
Theory Recap:  
Parameter Tuning in DBSCAN:

* minPts: Decrease this value to allow smaller clusters to form.  
* $\\epsilon$: Increase this value to expand the neighborhood radius.

## **Extra Theory Recap: Decision Tree**

What is a Decision Tree?  
A Decision Tree is a tool used in machine learning to make predictions or decisions based on a series of yes/no questions or splits.  
**Structure of a Decision Tree:**

* Root Node: The starting point.  
* Internal Nodes: Points where data is split.  
* Leaf Nodes: The endpoints representing the final decision.

Building a Decision Tree:  
A decision tree is built using data.

* Step 1: Start with the Root Node.  
* Step 2: Calculate a Splitting Criterion (Gini Index or Entropy).

How Do Splits Work?  
Gini Index:  
Gini Index measures how "pure" a group is.  
$Gini \= 1 \- \\sum p\_i^2$  
What is Pruning?  
Pruning simplifies the tree by removing splits that don't add significant value.  
**Types of Pruning:**

* Pre-Pruning: Stop growing early.  
* Post-Pruning: Grow full tree, then remove branches.

## **Extra Theory Recap: Neural Networks**

What is a Neural Network?  
A Neural Network is a machine learning model inspired by the structure of the human brain.  
**How Neural Networks Work:**

* Forward Propagation: Input data passes through the network.  
* Activation Functions: Add non-linearity (e.g., Sigmoid, ReLU).  
* Backward Propagation: The model updates weights to minimize loss using Gradient Descent.

Learning Rate:  
The Learning Rate controls the step size during the weight update process in gradient descent.

## **Extra Theory Recap: DBSCAN**

What is DBSCAN?  
DBSCAN groups data points based on their density.  
**Core Concepts:**

* $\\epsilon$ (epsilon): Radius of neighborhood.  
* minPts: Minimum points to be a core point.  
* Core Point, Border Point, Noise Point.

## **Extra Theory Recap: K-Means**

What is K-Means?  
K-Means partitions a dataset into k clusters, where each cluster is defined by its centroid.  
**Core Concepts:**

* Centroid: The center of a cluster.  
* Objective: Minimize within-cluster sum of squares (WCSS).

## **Association Rules**

**16\. Question:** Which of the following statements regarding the discovery of association rules is true (one or more)?

* The confidence of a rule can be computed starting from the supports of itemsets.  
* The support of an itemset is anti-monotonic with respect to the composition of the itemset.

Answer:  
Both statements are correct.  
**Theory Recap:**

* Support: Proportion of transactions containing an itemset.  
  $Support(X) \= \\frac{\\text{Transactions containing } X}{\\text{Total Transactions}}$  
* Confidence: Likelihood that item Y is purchased given item X.  
  $Confidence(X \\Rightarrow Y) \= \\frac{Support(X \\cup Y)}{Support(X)}$  
* **Anti-Monotonicity:** The Apriori principle states that if an itemset is frequent, all its subsets must be frequent. Conversely, if an itemset is infrequent, all its supersets must be infrequent.

17\. Question: Consider the transactional dataset below (1:A,B,C; 2:A,B,D; 3:B,D,E; 4:C,D; 5:A,C,D,E).  
Which is the confidence of the rule $A, C \\Rightarrow B$? 50%  
Answer:  
$Confidence \= \\frac{Support(A,C,B)}{Support(A,C)} \= \\frac{0.2}{0.4} \= 0.5$ (50%)  
**18\. Question:** Consider the transactional dataset below. Which is the support of the rule $A, C \\Rightarrow B$? 20%

Answer:  
$Support(A \\Rightarrow B) \= Support(A \\cup B) \= 0.2$ (20%)  
**19\. Question:** Consider the transactional dataset below. Which is the confidence of the rule $B \\Rightarrow E$? 33%

Answer:  
$Confidence \= \\frac{Support(B,E)}{Support(B)} \= \\frac{0.2}{0.6} \= 0.33$

## **Polynomial Regression**

**20\. Question:** When is polynomial regression appropriate? When the relationship between the predicting variable and the target cannot be approximated as linear.

Answer:  
Polynomial regression is appropriate when the data shows a non-linear relationship.  
Theory Recap:  
While linear regression fits a straight line ($y \= w\_0 \+ w\_1x$), polynomial regression fits a curve by adding polynomial terms of the independent variable ($y \= w\_0 \+ w\_1x \+ w\_2x^2 \+ \\dots \+ w\_dx^d$). This allows the model to capture non-linear patterns in the data.

## **Data Discretization**

**21\. Question:** Which is the purpose of discretization? Reduce the number of distinct values in an attribute, in order to put in evidence possible patterns and regularities.

Theory Recap:  
Discretization converts continuous attributes into discrete categories or intervals. Common methods include:

* **Equal Width Binning:** Divides the range into $N$ intervals of equal size.  
* **Equal Frequency Binning:** Divides the range into $N$ intervals, each containing approximately the same number of samples.

## **CRISP-DM Methodology**

**22\. Question:** In which part of the CRISP-DM methodology do we perform the test design activity? Modelling.

Theory Recap:  
The CRISP-DM (Cross-Industry Standard Process for Data Mining) methodology consists of six phases:

1. **Business Understanding:** Define objectives and requirements.  
2. **Data Understanding:** Collect and explore data.  
3. **Data Preparation:** Clean, construct, and format data.  
4. **Modelling:** Select and apply modeling techniques; **test design** occurs here to define how models will be evaluated.  
5. **Evaluation:** Review the model against business objectives.  
6. **Deployment:** Implement the model.

## **Standardization of Attributes**

**23\. Question:** Which is the main reason for the standardization of numeric attributes? Map all the numeric attributes to a new range such that the mean is zero and the variance is one.

Theory Recap:  
Standardization (Z-score normalization) transforms attributes to have properties of a standard normal distribution:  
$z \= \\frac{x \- \\mu}{\\sigma}$  
Where $\\mu$ is the mean and $\\sigma$ is the standard deviation. This is crucial for algorithms sensitive to the scale of data, like K-Means and SVM.

## **Gini Index**

**24\. Question:** What is Gini Index? An impurity measure of a dataset alternative to the Information Gain and to the Misclassification Index.

Answer:  
The Gini Index measures the impurity of a dataset. For a set of classes with probabilities $p\_i$, it is defined as:  
$Gini \= 1 \- \\sum p\_i^2$  
A lower Gini index indicates greater purity (all elements belong to a single class).  
**25\. Question:** Which of the following measures can be used as an alternative to the Information Gain? Gini Index.

## **Decision Trees**

**26\. Question:** In a decision tree, the number of objects in a node... is smaller than the number of objects in its ancestor.

Theory Recap:  
As the tree splits data from the root down to the leaves, the dataset is partitioned into smaller subsets. Therefore, a child node always contains a subset of the data present in its parent node (unless the split results in an empty node).

## **Bayesian Classifier**

**27\. Question:** Which of the following is a base hypothesis for a Bayesian classifier? The attributes must be statistically independent inside each class.

Theory Recap:  
The Naive Bayes classifier assumes that the presence of a particular feature in a class is unrelated to the presence of any other feature. This is the assumption of conditional independence:  
$P(X|C) \= \\prod\_{i=1}^{n} P(x\_i|C)$  
Where $X \= (x\_1, \\dots, x\_n)$ is the feature vector and $C$ is the class.

## **Clustering Metrics**

**28\. Question:** With reference to the total sum of squared errors and separation of a clustering scheme, which of the statements below is true? They are strictly correlated, if, changing the clustering scheme, one increases, then the other decreases.

**Theory Recap:**

* **Cohesion (SSE):** Measures how closely related objects are in a cluster. Lower SSE means better cohesion.  
* Separation: Measures how distinct or well-separated a cluster is from other clusters.  
  Generally, there is a trade-off: optimizing for very tight clusters (low SSE) can sometimes lead to less separation if clusters are forced to be small and numerous.

## **K-Means Clustering**

**29\. Question:** Which of the statements below is true (one or more)?

* Sometimes K-Means stops at a configuration which does not give the minimum distortion.  
* K-Means is quite efficient even for large datasets.  
* K-Means is very sensitive to the initial assignment of the centers.

Answer:  
All statements are true.  
**Theory Recap:**

* **Local Minima:** K-Means converges to a local minimum of the distortion function, not necessarily the global minimum.  
* **Efficiency:** Time complexity is $O(t \\cdot k \\cdot n \\cdot d)$, where $t$ is iterations, $k$ is clusters, $n$ is points, and $d$ is dimensions. This is linear in $n$, making it efficient.  
* **Initialization:** Poor initialization can lead to poor clustering results.

## **DBSCAN Clustering**

**30\. Question:** Which of the statements below is true (one or more)?

* Sometimes DBSCAN stops at a configuration which does not include any cluster.  
* DBSCAN can give good performance when clusters have concavities.  
* Increasing the radius of the neighborhood can decrease the number of noise points.

Answer:  
All statements are true.  
**Theory Recap:**

* **No Clusters:** If parameters are too strict (e.g., very small $\\epsilon$ or very large minPts), all points might be classified as noise.  
* **Concavities:** Density-based clustering can follow arbitrary shapes.  
* **Noise Reduction:** A larger $\\epsilon$ includes more points in neighborhoods, converting noise points into border or core points.

## **Association Rules**

**31\. Question:** What is the meaning of the statement: "the support is anti-monotone"? The support of an itemset never exceeds the support of its subsets.

Theory Recap:  
If $X \\subseteq Y$, then any transaction containing $Y$ must also contain $X$. Therefore, $Support(X) \\ge Support(Y)$. This property allows efficient pruning of the search space (Apriori algorithm).

## **Coefficient of Determination ($R^2$)**

**32\. Question:** What is the coefficient of determination $R^2$? Provide an index of goodness for a linear regression model.

Theory Recap:  
$R^2$ represents the proportion of the variance for the dependent variable that's explained by an independent variable or variables in a regression model.  
$R^2 \= 1 \- \\frac{SS\_{res}}{SS\_{tot}} \= 1 \- \\frac{\\sum (y\_i \- \\hat{y}\_i)^2}{\\sum (y\_i \- \\bar{y})^2}$  
Where $SS\_{res}$ is the sum of squares of residuals and $SS\_{tot}$ is the total sum of squares.

## **K-Means Optimization**

**33\. Question:** What does K-means try to minimize? The distortion, that is the sum of the squared distances of each point with respect to its centroid.

Theory Recap:  
The objective function of K-Means is the Sum of Squared Errors (SSE):  
$SSE \= \\sum\_{j=1}^{k} \\sum\_{x \\in C\_j} ||x \- \\mu\_j||^2$  
Where $C\_j$ is the $j$-th cluster and $\\mu\_j$ is its centroid.

## **CRISP-DM Methodology**

**34\. Question:** Which of the activities below is part of Business Understanding in the CRISP methodology? Which are the resources available (manpower, hardware, software, ...).

Theory Recap:  
Business Understanding focuses on understanding the project objectives and requirements from a business perspective. Key activities include:

* Determining business objectives.  
* Assessing the situation (inventory of resources, requirements, assumptions, and constraints).  
* Determining data mining goals.  
* Producing a project plan.

## **Outliers and Noise**

**35\. Question:** Which of the following statements is true (one or more)?

* Outliers can be due to noise.  
* The noise can generate outliers.

**Theory Recap:**

* **Noise:** Random error or variance in a measured variable.  
* Outliers: Data objects that deviate significantly from the rest of the objects.  
  While outliers can be legitimate extreme values, they are often the result of noise (e.g., measurement errors).

## **Information Gain and Indices**

**36\. Question:** In which mining activity the Information Gain can be useful? Classification.

Theory Recap:  
Information Gain (IG) is used in Decision Trees (ID3, C4.5) to decide which attribute to split on. It measures the change in information entropy from a prior state to a state that takes some information as given:  
$IG(S,A) \= H(S) \- \\sum\_{v \\in Values(A)} \\frac{|S\_v|}{|S|} H(S\_v)$  
Where $H(S)$ is the entropy of the set $S$.

## **Cross Validation**

**37\. Question:** What is cross validation? A technique to obtain a good estimation of the performance of a classifier when it will be used with data different from the training set.

Theory Recap:  
Cross-validation (e.g., k-fold) involves partitioning the data into subsets, training the data on a subset and validating it on the remaining data. This helps in assessing how the results of a statistical analysis will generalize to an independent data set and prevents overfitting.

## **Naive Bayes Classifier**

**38\. Question:** Which of the following preprocessing activities is useful to build a Naive Bayes classifier if the independence hypothesis is violated? Feature selection.

Theory Recap:  
The Naive Bayes assumption is that features are independent. If features are highly correlated (violation of independence), the model may perform poorly or overweight those features. Feature selection removes redundant (correlated) attributes, helping to satisfy the independence assumption.

## **Min-Max Scaling**

**39\. Question:** Which is the main reason for the Min-Max scaling (also known as rescaling) of attributes? Map all the numeric attributes to the same range, in order to prevent the attributes with higher range from having prevalent influence.

Theory Recap:  
Min-Max scaling rescales features to a fixed range, usually $\[0, 1\]$. The formula is:  
$X\_{scaled} \= \\frac{X \- X\_{min}}{X\_{max} \- X\_{min}}$  
This preserves the shape of the original distribution but constrains the values.

## **Normalization**

**40\. Question:** Which is the main reason for the normalization (also known as rescaling) of numeric attributes? Map all the numeric attributes to the same range, in order to prevent the attributes (without altering the distribution) with higher range from having prevalent influence.

## **Feature Selection**

**41\. Question:** Which of the following is not an objective of feature selection? Select the features with higher range, which have more influence on the computations.

Theory Recap:  
The objectives of feature selection are to:

* **Improve Prediction Performance:** By removing irrelevant data.  
* **Reduce Computational Cost:** Faster training and inference.  
* Improve Interpretability: Models with fewer variables are easier to understand.  
  Selecting features simply because they have a "higher range" is arbitrary and usually incorrect (scaling handles ranges).

## **Distance Functions**

**42\. Question:** For each type of data, choose the best-suited distance function:

* Vector space with real values: Euclidean Distance.  
* Boolean data: Jaccard Coefficient.  
* Vectors of terms representing documents: Cosine Distance.  
* High-dimensional spaces: Manhattan Distance.

**Theory Recap:**

* **Euclidean:** Standard straight-line distance. Good for low-dim dense data.  
* **Jaccard:** Measures similarity between finite sample sets (good for binary/sets).  
* **Cosine:** Measures the angle between vectors (good for text/documents where magnitude matters less than direction).  
* **Manhattan:** Sum of absolute differences. Often preferred in high dimensions over Euclidean due to the curse of dimensionality.

## **Overfitting in Classifiers**

**43\. Question:** When developing a classifier, which of the following is a symptom of overfitting? The error rate in the test set is much greater than the error rate in the training set.

Theory Recap:  
Overfitting occurs when a model learns the detail and noise in the training data to the extent that it negatively impacts the performance of the model on new data.

* **Training Error:** Low.  
* **Test/Validation Error:** High.

## **Decision Trees \- Node Attributes**

**44\. Question:** In a decision tree, an attribute which is used only in nodes near the leaves... gives little insight with respect to the target.

Theory Recap:  
Attributes at the top of the tree (root) provide the most information gain (global splitting power). Attributes used only near the leaves distinguish between very specific, small subsets of data and have less general predictive power.

## **Hierarchical Agglomerative Clustering**

**45\. Question:** Which of the statements below about Hierarchical Agglomerative Clustering is true? Requires the definition of distance between set of objects.

Theory Recap:  
Agglomerative clustering is a "bottom-up" approach. It starts with each object as a cluster and merges them. To merge clusters, a method to calculate the distance between clusters (sets of objects) is needed, such as:

* **Single Linkage:** Min distance.  
* **Complete Linkage:** Max distance.  
* **Average Linkage:** Average distance.

## **Agglomerative and Divisive Clustering**

**Theory Recap:**

* **Agglomerative (Bottom-Up):** Starts with $N$ clusters (one for each point) and iteratively merges the closest pair until one cluster remains or a stopping criterion is met.  
* **Divisive (Top-Down):** Starts with 1 cluster containing all points and iteratively splits the cluster until $N$ clusters remain.

## **Rule Evaluation**

**46\. Question:** Match the rule evaluation formulas with their names:

* $\\frac{sup(A \\Rightarrow C)}{sup(A)}$: Confidence  
* $\\frac{sup(A \\Rightarrow C)}{sup(C)}$: Lift  
* $sup(A \\cup C) \- sup(A) \\cdot sup(C)$: Leverage  
* $\\frac{1 \- sup(C)}{1 \- sup(A \\Rightarrow C)}$: Conviction

**Theory Recap:**

* **Confidence:** Probability of Consequent given Antecedent.  
* **Lift:** Ratio of Confidence to Expected Confidence (independence). Values \> 1 indicate positive correlation.  
* **Leverage:** Difference between observed frequency of A and C appearing together and expected frequency if independent.  
* **Conviction:** Ratio of expected frequency that A occurs without C if they were independent to the observed frequency of incorrect predictions.

## **Data Preprocessing**

**47\. Question:** In data preprocessing, which of the following is not an objective of the aggregation of attributes? Obtain a more detailed description of data.

**48\. Question:** In data preprocessing, which of the following is an objective of the aggregation of attributes?

* Obtain a less detailed scale.  
* Reduce the variability of data.  
* Reduce the number of attributes or distinct values.

Theory Recap:  
Aggregation combines two or more objects into a single object (e.g., daily sales to monthly sales). This reduces the number of data points, reduces variability (smoothing), and changes the scale, but it sacrifices detail.

## **Dimensionality Reduction**

**49\. Question:** In order to reduce the dimensionality of a dataset, which is the advantage of Multi Dimensional Scaling (MDS), with respect to Principal Component Analysis (PCA)? MDS can be used also with categorical data, provided that the matrix of the distance is available, while PCA is limited to vector spaces.

**Theory Recap:**

* **MDS:** A technique that creates a map displaying the relative positions of a number of objects, given only a table of the distances between them. It preserves global geometry.  
* **PCA:** A linear transformation that projects data onto new axes (principal components) to maximize variance. It strictly requires numerical data in a vector space.

## **Methods**

**50\. Question:** Which is different from the others?

* Decision tree (only supervised method \- between K-means, Expectation Maximization, Apriori).

**Theory Recap:**

* **Decision Tree:** A supervised learning algorithm used for classification and regression (labeled data).  
* **K-Means, EM, Apriori:** Unsupervised learning algorithms used for clustering and association (unlabeled data).

**51\. Question:** Which is different from the others?

* Decision tree (not a clustering method \- between K-means, Expectation Maximization, DBSCAN).

**Theory Recap:**

* **Clustering:** Grouping similar data points together (K-Means, EM, DBSCAN).  
* **Decision Tree:** A predictive classification/regression model.

**52\. Question:** Which is different from the others?

* DBSCAN (not a classification method \- between SVM, Neural Network, Decision Tree).

**Theory Recap:**

* **DBSCAN:** Density-based clustering algorithm (Unsupervised).  
* **SVM, Neural Network, Decision Tree:** Classification algorithms (Supervised).

**53\. Question:** Which is different from the others?

* Silhouette Index (not an index for the evaluation of purity \- between Misclassification Error, Gini Index, Entropy).

**Theory Recap:**

* **Silhouette Index:** Evaluates clustering quality (separation and cohesion) without external labels.  
* **Gini, Entropy, Misclassification:** Evaluate impurity in classification trees (supervised, requires labels).

## **Frequent Itemsets**

**54\. Question:** How does pruning work when generating frequent itemsets? If an itemset is not frequent, then none of its supersets can be frequent, therefore the frequencies of the supersets are not evaluated.

Theory Recap:  
This is the Apriori Principle: "If an itemset is frequent, then all of its subsets must also be frequent."  
Conversely, if an itemset $\\{A\\}$ is infrequent, then $\\{A, B\\}$ must also be infrequent. This drastically reduces the search space by pruning candidates that cannot possibly be frequent.

## **Expectation Maximization (EM)**

**55\. Question:** What measure is maximized by the Expectation Maximization (EM) algorithm for clustering? The likelihood of a class label, given the values of the attributes of the example.

Theory Recap:  
EM iterates between an E-step (Expectation) and an M-step (Maximization) to find the maximum likelihood estimates of parameters in statistical models, often used for Gaussian Mixture Models (GMMs). It probabilistic assigns points to clusters.

## **Information Gain**

**56\. Question:** The information gain is used to... select the attribute which maximizes, for a given training set, the ability to predict the class value.

Theory Recap:  
Information Gain is the metric used to select the "best" attribute to split the data at each node of a decision tree. It is defined as the reduction in entropy:  
$Gain(S, A) \= Entropy(S) \- \\sum \\frac{|S\_v|}{|S|} Entropy(S\_v)$

## **Normalization**

**57\. Question:** In data preparation, which is the effect of normalization? Map all the numeric attributes to the same range, without altering the distribution, in order to avoid that attributes with large ranges have more influence.

Theory Recap:  
Normalization (often Min-Max scaling) rescales data to a fixed range, usually \[0, 1\]. It is different from standardization (Z-score), which centers data at 0 with variance 1\.

## **Clustering Methods**

**58\. Question:** Which of the following clustering methods is not based on distances between objects? Expectation Maximization.

**Theory Recap:**

* **EM:** Based on statistical probability distributions (likelihood) and estimating parameters of those distributions.  
* **K-Means, Hierarchical, DBSCAN:** Explicitly rely on geometric distance measures (Euclidean, Manhattan) to determine similarity and clusters.

## **Feature Selection**

**59\. Question:** In a dataset with D attributes, how many subsets of attributes should be considered for feature selection according to an exhaustive search? $O(2^D)$.

Theory Recap:  
An exhaustive search evaluates every possible subset of features. For a set of $D$ features, the power set (set of all subsets) has size $2^D$. This is computationally expensive (NP-hard).

## **Curse of Dimensionality**

**60\. Question:** Which is the effect of the curse of dimensionality? When the number of dimensions increases, the Euclidean distance becomes less effective to discriminate between points in the space.

Theory Recap:  
In high-dimensional spaces, data becomes sparse, and the distance between the nearest and farthest points tends to converge. This makes distance-based algorithms (like K-Means and KNN) less effective as the concept of "proximity" breaks down.

## **Bayesian Classification**

**61\. Question:** Which is the main purpose of smoothing in Bayesian classification? Classifying an object containing attribute values which are missing from some classes in the training set.

Theory Recap:  
Laplace Smoothing (Additive Smoothing): Adds a small count (usually 1\) to all probabilities to prevent zero probabilities. If a feature value in the test set never appeared in the training set for a given class, the raw probability would be 0, wiping out the entire calculation. Smoothing ensures the model can still make a prediction:  
$P(x\_i|C) \= \\frac{count(x\_i, C) \+ 1}{count(C) \+ |V|}$

## **DBSCAN Clustering**

**62\. Question:** Which of the following characteristics of data can reduce the effectiveness of DBSCAN? Presence of clusters with different densities.

Theory Recap:  
DBSCAN uses global parameters ($\\epsilon$ and minPts). It struggles when clusters have varying densities because a single density threshold ($\\epsilon$) cannot capture all clusters simultaneously. If $\\epsilon$ is small enough for dense clusters, it might miss sparse ones; if large enough for sparse ones, it might merge dense ones.

## **Distance Metrics**

**63\. Question:** Which of the following types of data allows the use of the Euclidean distance? Point in a vector space.

Theory Recap:  
Euclidean distance is defined for continuous numeric variables in a vector space. It calculates the straight-line distance:  
$d(p, q) \= \\sqrt{\\sum (p\_i \- q\_i)^2}$  
It is not directly suitable for categorical or binary data without transformation (e.g., One-Hot Encoding).

## **Neural Networks**

**64\. Question:** What are the hyperparameters of a Neural Network (possibly non exhaustive)? Hidden layer structure, learning rate, activation function, number of epochs.

**Theory Recap:**

* **Hyperparameters:** Parameters set *before* training begins (e.g., number of layers, number of neurons, learning rate, batch size).  
* **Model Parameters:** Internal variables learned *during* training (weights and biases).

## **Regression Models**

**65\. Question:** How can we measure the quality of a trained regression model? With a formula elaborating the difference between the forecast values and the true ones.

Theory Recap:  
Common metrics include:

* **MAE (Mean Absolute Error):** $\\frac{1}{n} \\sum |y\_i \- \\hat{y}\_i|$  
* **MSE (Mean Squared Error):** $\\frac{1}{n} \\sum (y\_i \- \\hat{y}\_i)^2$  
* RMSE (Root Mean Squared Error): $\\sqrt{\\frac{1}{n} \\sum (y\_i \- \\hat{y}\_i)^2}$  
  These metrics quantify the deviation of predicted values from actual values.

## **Classification vs Regression**

**66\. Question:** What is the difference between classification and regression? Classification has a categorical target, while regression has a numeric target.

**Theory Recap:**

* **Classification:** Predicting a discrete class label (e.g., Spam/Not Spam, Cat/Dog). Output is a category.  
* **Regression:** Predicting a continuous quantitative value (e.g., House Price, Temperature). Output is a number.

## **Principal Component Analysis (PCA)**

**67\. Question:** In feature selection, what is the Principal Component Analysis? A mathematical technique used to transform a set of numeric attributes into a smaller set of numeric attributes which capture most of the variability in data.

Theory Recap:  
PCA is a dimensionality reduction technique. It projects data onto a new set of orthogonal axes called Principal Components (eigenvectors of the covariance matrix). The first component captures the maximum variance, the second captures the remaining maximum variance, and so on. It is an unsupervised linear transformation.

## **Backpropagation**

68\. Question: In a Neural Network, what is the backpropagation?  
Answer: The technique used to adjust the connection weights according to the difference between the desired output and the output generated by the network.  
Theory Recap:  
Backpropagation computes the gradient of the loss function with respect to the weights of the network. It uses the Chain Rule to propagate error gradients backward from the output layer to the input layer.  
Weight Update Rule:  
$w\_{new} \= w\_{old} \- \\eta \\cdot \\frac{\\partial L}{\\partial w}$  
Where $\\eta$ is the learning rate.  
**Example:**

* **Network Setup:**  
  * Single-layer network with inputs $x\_1, x\_2$, weights $w\_1, w\_2$, bias $b$, and output $\\hat{y}$.  
  * Activation function: Sigmoid $\\sigma(z) \= \\frac{1}{1 \+ e^{-z}}$.  
  * Target: $y \= 1$.  
  * Initial weights: $w\_1 \= 0.5, w\_2 \= 0.3, b \= 0.1$.  
  * Inputs: $x\_1 \= 1, x\_2 \= 0$.  
* **Forward Pass:**  
  * Compute weighted sum: $z \= w\_1x\_1 \+ w\_2x\_2 \+ b \= (0.5 \\cdot 1\) \+ (0.3 \\cdot 0\) \+ 0.1 \= 0.6$.  
  * Compute output: $\\hat{y} \= \\sigma(z) \= \\frac{1}{1 \+ e^{-0.6}} \\approx 0.645$.  
* **Loss Computation:**  
  * Loss (MSE): $L \= \\frac{1}{2}(y \- \\hat{y})^2 \= \\frac{1}{2}(1 \- 0.645)^2 \\approx 0.063$.  
* **Backward Pass:**  
  * Compute gradient of loss with respect to $\\hat{y}$: $\\frac{\\partial L}{\\partial \\hat{y}} \= \-(y \- \\hat{y}) \= \-(1 \- 0.645) \\approx \-0.355$.  
  * Update weights based on the gradient and learning rate.