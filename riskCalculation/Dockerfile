FROM python:3.11-slim-bullseye
WORKDIR /app
COPY safety_factor_calculator.py .

ENV TOTAL_STAKED="13000000"
ENV AVERAGE_OPERATOR_COST="32"
ENV NUMBER_OF_OPERATORS="400000"
ENV POTENTIAL_PROFIT_FROM_CORRUPTION="1000000"

#CMD ["python", "safety_factor_calculator.py", "13000000", "32", "400000", "1000000"]
CMD ["python", "safety_factor_calculator.py"]