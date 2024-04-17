FROM python:3.8-slim

# Set the working directory
WORKDIR /app

# Copy the Python script into the container
COPY safety_factor_calculator.py .

# Command to run the script
CMD ["python", "safety_factor_calculator.py", "13000000", "32", "400000", "1000000"]
