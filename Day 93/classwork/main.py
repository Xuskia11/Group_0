# Python 3.12.3 (tags/v3.12.3:f6650f9, Apr  9 2024, 14:05:25) [MSC v.1938 64 bit (AMD64)] on win32
# Type "help", "copyright", "credits" or "license()" for more information.
# >>> import numpy as np
# example_input = [1, .2, .1, .05, .2]
# >>> 
# >>> example_weights = [.2, .12, .4, .6, .90]
# >>> input_vector = np.array(example_input)
# Traceback (most recent call last):
#   File "<pyshell#3>", line 1, in <module>
#     input_vector = np.array(example_input)
# NameError: name 'example_input' is not defined
# >>> import numpy as np
# >>> example_input = [1, .2, .1, .05, .2]
# >>> example_weights = [.2, .12, .4, .6, .90]
# >>> example_input
# [1, 0.2, 0.1, 0.05, 0.2]
# >>> input_vector = np.array(example_input)
# >>> input_vector
# array([1.  , 0.2 , 0.1 , 0.05, 0.2 ])
# >>> weights = np.array(example_weights)
# >>> weights
# array([0.2 , 0.12, 0.4 , 0.6 , 0.9 ])
# bias_weight = .2
# activation_level = np.dot(input_vector, weights) + (bias_weight * 1)
# threshold = 0.5
# if activation_level >= threshold:
#     perceptron_output = 1
# else:
#     perceptron_output = 0

# expected_output = 0
# new_weights = []for i, x in enumerate(example_input):
    
# SyntaxError: invalid syntax
# new_weights = []
# for i, x in enumerate(example_input):
    
# SyntaxError: multiple statements found while compiling a single statement
# new_weights = []
# for i, x in enumerate(example_input):
    
# SyntaxError: multiple statements found while compiling a single statement
# new_weights = []
# for i,xin enumerate(example_input):
    
# SyntaxError: invalid syntax
# for i,x in enumerate(example_input):
#     new_weights.append(weights[i] + (expected_output - perceptron_output) * x)

# weights = np.array(new_weights)
# example_weights
# [0.2, 0.12, 0.4, 0.6, 0.9]
# weights
# array([-0.8 , -0.08,  0.3 ,  0.55,  0.7 ])
# (expected_output - perceptron_output)
# -1
# (weights[i] + (expected_output - perceptron_output) * x)
# 0.49999999999999994
# new_weights.append(weights[i] + (expected_output - perceptron_output) * x)


# new_weights.append(weights[i] + (expected_output - perceptron_output) * x)
# new_weights.append(weights[i] + (expected_output - perceptron_output) * x)
